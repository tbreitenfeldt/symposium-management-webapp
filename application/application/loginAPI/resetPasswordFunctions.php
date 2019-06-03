<?php

require_once "../databaseUtil/pdoUtil.php";
require_once "dataValidation.php";
require_once "includeConfig.php";


function resetPassword() {
    $pdoUtil = null;
    $status = "";
    $message = "";

    try {
        if($_SERVER["REQUEST_METHOD"] == "POST") {
            session_start();

            $username = $_SESSION[USERNAME_FIELD];
            $currentPassword = $_POST[USER_OLD_PASSWORD];
            $newPassword = $_POST[USER_PASSWORD_FIELD];
            $confirmNewPassword = $_POST[USER_CONFIRM_PASSWORD];
            $pdoUtil = PDOUtil::createPDOUtil();
            $c = "constant";
            $sql = "UPDATE {$c('USER_TABLE_NAME')} SET {$c('USER_PASSWORD_FIELD')}=? WHERE {$c('USERNAME_FIELD')}=?";

            session_write_close();

            if (verifyCurrentPassword($pdoUtil, $username, $currentPassword)) {
                validatePasswordConfirmation($newPassword, $confirmNewPassword);

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

    $c = "constant";
    $sql = "SELECT {$c('USER_PASSWORD_FIELD')} FROM {$c('USER_TABLE_NAME')} WHERE {$c('USERNAME_FIELD')}=?";
    $results = $pdoUtil->query($sql, [$username]);

    if (sizeof($results) == 0) {
        throw new InvalidArgumentException("Error processing user, try logging out and logging back in.");
    } else if (sizeof($results) != 1) {
        throw new InvalidArgumentException("There was an error processing your username and password, please contact an administrator.");
    }//end if

    $hashedPassword = $results[0][USER_PASSWORD_FIELD];

    if (password_verify($currentPassword, $hashedPassword)) {
        return true;
    }//end if

    return false;
}//end function 


    if (isset($_POST[USER_OLD_PASSWORD]) and isset($_POST[USER_PASSWORD_FIELD]) and isset($_POST[USER_CONFIRM_PASSWORD])) {
resetPassword();
}//end if
?>