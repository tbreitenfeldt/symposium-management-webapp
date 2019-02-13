<?php

require_once "../databaseUtil/pdoUtil.php";
require_once "dataValidation.php";
require_once "config.php";


function register() {
    $pdoUtil = null;
    $status = "";
    $message = "";

    try {
        if($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = trim($_POST["username"]);
            $password = $_POST["password"];
            $confirmPassword = $_POST["confirmPassword"];
            $pdoUtil = PDOUtil::createPDOUtil();
            $c = "constant";
            $sql = "";

            validateUsername($pdoUtil, $username);
            validatePassword($password, $confirmPassword);

            //validate any other user data that is provided in USER_DATA_FIELDS
            foreach (USER_DATA_FIELDS as $field=>$validationFunction) {
                $validationFunction($_POST[$field]);
            }//end foreach loop

            $parameters = [];
            $sql = getSQLInsertAllFields($parameters);

            //Insert data if no exception was thrown, and redirect to the login page.
            $password = password_hash($password, PASSWORD_DEFAULT);
            array_unshift($parameters, $username, $password);
            $pdoUtil->query($sql, $parameters);
            $status = "success";
            $message = LOGIN_PAGE_NAME;
        } else {
            throw new InvalidArgumentException("There was a problem Processing your request, please try again.");
        }//end else
    } catch(InvalidArgumentException $iae) {
        $status = "error";
        $message = $iae->getMessage();
    } catch(Exception $e) {
        $status = "error";
        $message = "Unknown error: There was an error processing your request, please try again.";
    } finally {
        if ($pdoUtil != null) {
            $pdoUtil->close();
        }//end if

        echo json_encode(array($status=>$message));
    }//end try catch finally
}//end function


function getSQLInsertAllFields(&$parameters) {
    $c = "constant";
    $sql = "INSERT INTO {$c('USER_TABLE_NAME')} ({$c('USERNAME_FIELD')}, {$c('USER_PASSWORD_FIELD')}";
    $sqlPlaceholders = "VALUES (?, ?";
    $fields = array_keys(USER_DATA_FIELDS);

    foreach ($fields as $field) {
        $sql .= ", " . $field;
        $sqlPlaceholders .= ", ?";
        array_push($parameters, $_POST[$field]);
    }//end foreach loop

    $sqlPlaceholders .= ")";
    $sql .= ") " . $sqlPlaceholders . ";";
    return $sql;
}//end function 


if (isset($_POST["username"]) and isset($_POST["password"]) and isset($_POST["confirmPassword"])) {
    register();
}//end if
?>