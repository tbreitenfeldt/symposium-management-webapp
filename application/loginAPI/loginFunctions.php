<?php

require_once "../databaseUtil/pdoUtil.php";
require_once "dataValidation.php";
require_once "includeConfig.php";


function login() {
    $pdoUtil = null;
    $status = "";
    $message = "";
    $result = array();

    try {
        if($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = strtolower(trim($_POST[USERNAME_FIELD]));
            $password = $_POST[USER_PASSWORD_FIELD];
            $pdoUtil = PDOUtil::createPDOUtil();

            validateUsername($username);
            loginUser($pdoUtil, $username, $password);

            //If the session variable pageToAccess is null, then the user is accessing the login page directly, which will redirect to the landing page on login
            if ( !isset($_SESSION["pageToAccess"])) {
                $_SESSION["pageToAccess"] = LOGGEDIN_LANDING_PAGE_NAME;
            }//end if

            $status = "success";
            $message = $_SESSION["pageToAccess"];
        } else {
            throw new InvalidArgumentException("There was a problem Processing your request, please try again.");
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
        $result[$status] = $message;
        echo json_encode($result);
    }//end try catch finally
}//end function


function loginUser(&$pdoUtil, $username, $password) {
    if (empty($password)) {
        throw new InvalidArgumentException("Please enter your password");
    }//end if

    $c = "constant";
    $sql = getSQLSelectForAllFields();

    $results = $pdoUtil->query($sql, [$username]);

    if (sizeof($results) != 1) {
        throw new InvalidArgumentException("Invalid username or password.");
    }//end if

    $hashedPassword = $results[0][USER_PASSWORD_FIELD];
    $userFailedLoginCount = $results[0][FAILED_LOGIN_COUNT_FIELD];
    $userFirstFailedLogin = $results[0][FIRST_FAILED_LOGIN_FIELD];

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
        $_SESSION[LOGGEDIN_TOKEN_NAME] = true;
        $_SESSION[USER_ID_FIELD] = $results[0][USER_ID_FIELD];
        $_SESSION[USERNAME_FIELD] = $results[0][USERNAME_FIELD];
        $fields = array_keys(USER_DATA_FIELDS);

        foreach($fields as $field) {
            $_SESSION[$field] = $results[0][$field];
        }//end foreach loop

        session_write_close();
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


if (isset($_POST[USERNAME_FIELD]) && isset($_POST[USER_PASSWORD_FIELD])) {
    login();
}//end if
?>