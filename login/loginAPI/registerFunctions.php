<?php

require_once "databaseUtil/pdoUtil.php";
require_once "usernameAndPassswordValidation.php";


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
            $sql = "INSERT INTO UserAccounts (username, userPassword) VALUES (?, ?)";

            validateUsername($pdoUtil, $username);
            validatePassword($password, $confirmPassword);

            //Insert data if no exception was thrown, and redirect to the login page.
            $password = password_hash($password, PASSWORD_DEFAULT);
            $pdoUtil->query($sql, [$username, $password]);
            $status = "success";
            $message = "login.php";
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


if (isset($_POST["username"]) and isset($_POST["password"]) and isset($_POST["confirmPassword"])) {
    register();
}//end if
?>