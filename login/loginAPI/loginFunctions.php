<?php

require_once "../databaseUtil/pdoUtil.php";
require_once "config.php";


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
            $message = LOGGEDIN_LANDING_PAGE_NAME;
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
        echo json_encode(array($status=>$message));
    }//end try catch finally
}//end function


function loginUser($pdoUtil, $username, $password) {
    if (empty($username)) {
        throw new InvalidArgumentException("Please enter your username");
    }//end if
    if (empty($password)) {
        throw new InvalidArgumentException("Please enter your password");
    }//end if

    $c = "constant";
    $sql = getSQLSelectForAllFields();

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
            $sql = "UPDATE {$c('USER_TABLE_NAME')} SET {$c('FIRST_FAILED_LOGIN_FIELD')}=?, {$c('FAILED_LOGIN_COUNT_FIELD')}=? WHERE {$c('USERNAME_FIELD')}=?";
            $pdoUtil->query($sql, [$userFirstFailedLogin, $userFailedLoginCount, $username]);
        } else {
            $userFailedLoginCount++;
            $sql = "UPDATE {$c('USER_TABLE_NAME')} SET {$c('FAILED_LOGIN_COUNT_FIELD')}=? WHERE {$c('USERNAME_FIELD')}=?";

            $pdoUtil->query($sql, [$userFailedLoginCount, $username]);
        }//end else 

        throw new InvalidArgumentException("Invalid username or password.");
    } else {
        $userFirstFailedLogin = 0;
        $userFailedLoginCount = 0;
            $sql = "UPDATE {$c('USER_TABLE_NAME')} SET {$c('FIRST_FAILED_LOGIN_FIELD')}=?, {$c('FAILED_LOGIN_COUNT_FIELD')}=? WHERE {$c('USERNAME_FIELD')}=?";
        $pdoUtil->query($sql, [$userFirstFailedLogin, $userFailedLoginCount, $username]);
        session_start();
        $_SESSION["loggedin"] = true;
        $_SESSION["id"] = $results[0]["userID"];
        $_SESSION["username"] = $results[0]["username"];
        $fields = array_keys(USER_DATA_FIELDS);

        foreach($fields as $field) {
            $_SESSION[$field] = $results[0][$field];
        }//end foreach loop
    }//end else
}//end function


function getSQLSelectForAllFields() {
    $c = "constant";
    $sql = "SELECT {$c('USER_ID_FIELD')}, {$c('USERNAME_FIELD')}, {$c('USER_PASSWORD_FIELD')}, {$c('FIRST_FAILED_LOGIN_FIELD')}, " .
            "{$c('FAILED_LOGIN_COUNT_FIELD')}";
    $fields = array_keys(USER_DATA_FIELDS);

    foreach ($fields as $field) {
        $sql .= ", " . $field;
    }//end foreach loop

    $sql .= " FROM {$c('USER_TABLE_NAME')} WHERE {$c('USERNAME_FIELD')}=?";
    return $sql;
}//end function 


if (isset($_POST["username"]) and isset($_POST["password"])) {
    login();
}//end if
?>