<?php
session_start();

require_once "databaseUtil/pdoUtil.php";
require_once "usernameAndPassswordValidation.php";


function resetPassword() {
    $pdoUtil = null;
    $status = "";
    $message = "";

    try {
        if($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = $_SESSION["username"];
            $currentPassword = $_POST["currentPassword"];
            $newPassword = $_POST["newPassword"];
            $confirmNewPassword = $_POST["confirmNewPassword"];
            $pdoUtil = PDOUtil::createPDOUtil();
            $sql = "UPDATE UserAccounts SET userPassword=? WHERE username=?";

            if (verifyCurrentPassword($pdoUtil, $username, $currentPassword)) {
                validatePassword($newPassword, $confirmNewPassword);

                $newPassword = password_hash($newPassword, PASSWORD_DEFAULT);
                $pdoUtil->query($sql, [$newPassword, $username]);
                $status = "success";
                $message = "logout.php";
            } else {
                throw new InvalidArgumentException("Invalid password. Please enter your current password.");
            }//end else 
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


function verifyCurrentPassword($pdoUtil, $username, $currentPassword) {
    if (empty($currentPassword)) {
        throw new InvalidArgumentException("Please enter your current password.");
    }//end if

    $sql = "SELECT userPassword FROM UserAccounts WHERE username=?";
    $results = $pdoUtil->query($sql, [$username]);

    if (sizeof($results) == 0) {
        throw new InvalidArgumentException("Error processing user, try logging out and logging back in.");
    } else if (sizeof($results) != 1) {
        throw new InvalidArgumentException("There was an error processing your username and password, please contact an administrator.");
    }//end if

    $hashedPassword = $results[0]["userPassword"];

    if (password_verify($currentPassword, $hashedPassword)) {
        return true;
    }//end if

    return false;
}//end function 


    if (isset($_POST["currentPassword"]) and isset($_POST["newPassword"]) and isset($_POST["confirmNewPassword"])) {
resetPassword();
}//end if
?>