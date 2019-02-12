<?php

require_once "databaseUtil/pdoUtil.php";

define("LOGIN_ATTEMPT_LIMIT", 5);
define("LOCKOUT_TIME", 180);


function login() {
    $pdoUtil = null;
    $status = "";
    $message = "";

    try {
        if($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = strtolower(trim($_POST["username"]));
            $password = $_POST["password"];
            $pdoUtil = PDOUtil::createPDOUtil();

            loginUser($pdoUtil, $username, $password);
            $status = "success";
            $message = "welcome.php";
        } else {
            throw new InvalidArgumentException("hello, There was a problem Processing your request, please try again.");
        }//end else
    } catch(InvalidArgumentException $iae) {
        $status = "error";
        $message = $iae->getMessage();
    } catch(Exception $e) {
        $status = "error";
        //$message = "Unknown error: There was an error processing your request, please try again.";
        $message = $e.getMessage();
    } finally {
        if ($pdoUtil != null) {
            $pdoUtil->close();
        }//end if

        sleep(1);
    }//end try catch finally

    echo json_encode(array($status=>$message));
}//end function


function loginUser($pdoUtil, $username, $password) {
    if (empty($username)) {
        throw new InvalidArgumentException("Please enter your username");
    }//end if
    if (empty($password)) {
        throw new InvalidArgumentException("Please enter your password");
    }//end if

    $sql = "SELECT userID, username, userPassword, userFirstFailedLogin, userFailedLoginCount FROM UserAccounts WHERE username=?";
    $results = $pdoUtil->query($sql, [$username]);

    if (sizeof($results) == 0) {
        throw new InvalidArgumentException("Invalid username or password.");
    }//end if

    $hashedPassword = $results[0]["userPassword"];
    $userFailedLoginCount = $results[0]["userFailedLoginCount"];
    $userFirstFailedLogin = $results[0]["userFirstFailedLogin"];

    if (($userFailedLoginCount >= LOGIN_ATTEMPT_LIMIT)
                && ((time() - (int)$userFirstFailedLogin) < LOCKOUT_TIME)) {
        throw new InvalidArgumentException("You have been locked out. To many attempts have been made to login with this account, please try again in a bit.");
    } else if ( !password_verify($password, $hashedPassword)) {
        if (time() - $userFirstFailedLogin > LOCKOUT_TIME) {
            $userFirstFailedLogin = time();
            $userFailedLoginCount = 1;
            $sql = "UPDATE UserAccounts SET userFirstFailedLogin=?, userFailedLoginCount=? WHERE username=?";
            $pdoUtil->query($sql, [$userFirstFailedLogin, $userFailedLoginCount, $username]);
        } else {
            $userFailedLoginCount++;
            $sql = "UPDATE UserAccounts SET userFailedLoginCount=? WHERE username=?";
            $pdoUtil->query($sql, [$userFailedLoginCount, $username]);
        }//end else 

        throw new InvalidArgumentException("Invalid username or password.");
    } else {
        $userFirstFailedLogin = 0;
        $userFailedLoginCount = 0;
        $sql = "UPDATE UserAccounts SET userFirstFailedLogin=?, userFailedLoginCount=? WHERE username=?";
        $pdoUtil->query($sql, [$userFirstFailedLogin, $userFailedLoginCount, $username]);
        session_start();
        $_SESSION["loggedin"] = true;
        $_SESSION["id"] = $results[0]["userID"];
        $_SESSION["username"] = $results[0]["username"];
    }//end else
}//end function


if (isset($_POST["username"]) and isset($_POST["password"])) {
    login();
}//end if
?>