<?php
require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";

require_once "includeConfig.php";
require_once "dataValidation.php";
require_once "../databaseUtil/pdoUtil.php";


function resetForgotPassword() {
    $pdoUtil = null;
    $status = "";
    $message = "";

    try {
        if($_SERVER["REQUEST_METHOD"] == "POST") {
            $pdoUtil = PDOUtil::createPDOUtil();
            $email = $_GET["email"];
            $token = $_GET["token"];
            $username = validateUser($pdoUtil, $email, $token);
            $newPassword = $_POST[USER_PASSWORD_FIELD];
            $confirmNewPassword = $_POST[USER_CONFIRM_PASSWORD];

            updatePassword($pdoUtil, $username, $newPassword, $confirmNewPassword);
            sendSuccessEmail($username, $email);

            //logout of any accounts currently logged in
            session_start();
            $_SESSION = array();
            session_destroy();
            session_write_close();

            $status = "success";
            $message = LOGIN_PAGE_NAME;
        } else {
            throw new InvalidArgumentException("There was a problem Processing your request, please try again.");
        }//end else
    } catch(InvalidArgumentException $e) {
        $status = "error";
        $message = $e->getMessage();
    } catch(Exception $e) {
        $status = "error";
        $message = "This is a general exception:<br>" . $e->getMessage();
    } finally {
        if ($pdoUtil != null) {
            $pdoUtil->close();
        }//end if

        sleep(1);
        $result[$status] = $message;
        echo json_encode($result);
    }//end try catch finally
}//end function


function validateUser(&$pdoUtil, $email, $token) {
    $hashedToken = "";
    $tokenExperationTime = 0;
    $username = "";
    $c = "constant";
    $sql = "SELECT user_name, user_forgot_password_token, user_forgot_password_experation FROM user_accounts WHERE user_email=?;";
    $results = $pdoUtil->query($sql, [$email]);

    if ($results == null || sizeof($results) != 1) {
        throw new InvalidArgumentException("Invalid email or token, please return to the forgot password page to get a new link.");
    }//end if

    $hashedToken = $results[0]["user_forgot_password_token"];

    if ( !password_verify($token, $hashedToken)) {
        throw new InvalidArgumentException("Invalid email or token, please return to the forgot password page to resend a new link.");
    }//end if

    $tokenExperationTime = (int)$results[0]["user_forgot_password_experation"];

    if (time() >= $tokenExperationTime) {
        throw new InvalidArgumentException("Token has expired, please return to the forgot password page to resend a new link.");
    }//end if

    $username = $results[0]["user_name"];
    return $username;
}//end function


function updatePassword(&$pdoUtil, $username, $newPassword, $confirmNewPassword) {
    $c = "constant";
    $sql = "UPDATE {$c('USER_TABLE_NAME')} SET {$c('USER_PASSWORD_FIELD')}=?, user_forgot_password_token=?, user_forgot_password_experation=? WHERE {$c('USERNAME_FIELD')}=?";

    validatePasswordConfirmation($newPassword, $confirmNewPassword);

    $newPassword = password_hash($newPassword, PASSWORD_DEFAULT);
    $pdoUtil->query($sql, [$newPassword, null, 0, $username]);
}//end function 


function sendSuccessEmail($username, $userEmail) {
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->CharSet =  "utf-8";
    $mail->IsSMTP();
    $mail->SMTPAuth = true;                  
    $mail->Username = EMAIL_SENDER_USERNAME;
    $mail->Password = EMAIL_SENDER_PASSWORD;
    $mail->SMTPSecure = "ssl";  
    $mail->Host = EMAIL_SENDER_HOST;
    $mail->Port = EMAIL_SENDER_PORT;
    $mail->From = EMAIL_SENDER_FROM;
    $mail->Sender = EMAIL_SENDER_FROM;
    $mail->FromName = EMAIL_SENDER_NAME;
    $mail->AddReplyTo(EMAIL_SENDER_REPLY_TO_EMAIL, EMAIL_SENDER_REPLY_TO_NAME);
    $mail->AddAddress($userEmail, $username);
    $mail->Subject  =  "Password Reset Successful";
    $mail->IsHTML(true);
    $mail->Body    ="The password for the pacific western disability studies account with the username:<br>{$username}<br>has been reset, if you did not reset your " .
            "password, please contact an administrator.<br><br>This is an automated message, please do not respond.<br>";

    if( !$mail->Send()) {
        throw new InvalidArgumentException("Mail Error - >" . $mail->ErrorInfo);
    }//end if
}//end function


if ( !isset($_GET) || !isset($_GET["token"]) || !isset($_GET["email"])) {
    $result = array("errorRedirection"=>"../error.php");
    echo json_encode($result);
} else {
    if (isset($_POST[USER_PASSWORD_FIELD]) && isset($_POST[USER_CONFIRM_PASSWORD])) {
        resetForgotPassword();
    } else {
        $result = array("errorRedirection"=>"../error.php");
        echo json_encode($result);
    }//end else
}//end else
?>