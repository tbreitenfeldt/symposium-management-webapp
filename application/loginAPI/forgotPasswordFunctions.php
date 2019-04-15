<?php 
require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";
require_once "../databaseUtil/pdoUtil.php";
require_once "includeConfig.php";

define("FORGOT_PASSWORD_TOKEN_EXPERATION_TIME", 360);


function processForgotPasswordRequest() {
    $pdoUtil = null;
    $status = "";
    $message = "";

    try {
        $pdoUtil = PDOUtil::createPDOUtil();
        $userInfo = checkIfUserExists($pdoUtil);
        $token = generateToken($pdoUtil, $userInfo["user_email"]);
        $htmlLink = getResetPasswordLink($userInfo["user_email"], $token);

        sendForgotPasswordEmail($userInfo["user_name"], $htmlLink);

        $status = "successMessage";
        $message = "Success! Please check your email for a link to reset your password.";
    } catch(InvalidArgumentException $iae) {
        $status = "error";
        $message = $iae->getMessage();
    } catch(Exception $e) {
        $status = "error";
        $message = $e->getMessage();
    } finally {
        if ($pdoUtil != null) {
            $pdoUtil->close();
        }//end if

        sleep(1);
        $result[$status] = $message;
        echo json_encode($result);
    }//end try catch finally
}//end function


function checkIfUserExists($pdoUtil) {
    if ( !isset($_POST[USER_EMAIL_FIELD])) {
        throw new InvalidArgumentException("Please enter an email address.");
    }//end if

    $email = trim($_POST[USER_EMAIL_FIELD]);
    $results = [];

    if (empty($_POST[USER_EMAIL_FIELD])) {
        throw new InvalidArgumentException("Please enter an email address.");
    }//end if
    if ( !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new InvalidArgumentException("Invalid email address.");
    }//end if

    $results = $pdoUtil->query("SELECT user_name, user_email FROM user_accounts WHERE user_email=?", [$email]);

    if (sizeof($results) != 1) {
        throw new InvalidArgumentException("Invalid email address.");
    }//end if

    return $results[0];
}//end function


function generateToken($pdoUtil, $email) {
    $token = md5(uniqid(rand(), true));
    $hashedToken = password_hash($token, PASSWORD_DEFAULT);
    $sql = "UPDATE user_accounts SET user_forgot_password_token=?, user_forgot_password_experation=? WHERE user_email=?;";
    $experationTime = time() + FORGOT_PASSWORD_TOKEN_EXPERATION_TIME;
    $pdoUtil->query($sql, [$hashedToken, $experationTime, $email]);
    return $token;
}//end function


function getResetPasswordLink($email, $token) {
    return stripslashes('<a href="http://pacificwesterndisabilitystudies.tk/resetForgotPassword.php?token={$token}&email={$email}">Reset Password</a>');
}//end function


function sendForgotPasswordEmail($username, $link) {
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->CharSet =  "utf-8";
    $mail->IsSMTP();
    $mail->SMTPAuth = true;                  
    $mail->Username = "timothybreitenfeldt@gmail.com";
    $mail->Password = "seniorTeam4";
    $mail->SMTPSecure = "ssl";  
    $mail->Host = "smtp.gmail.com";
    $mail->Port = "465";
    $mail->From="timothybreitenfeldt@gmail.com";
    $mail->Sender = "timothybreitenfeldt@gmail.com";
    $mail->FromName="Disability Symposium Forgot Password";
    $mail->AddReplyTo("timothybreitenfeldt@gmail.com", "No Reply");
    $mail->AddAddress("timothyjb310@gmail.com", 'Timothy');
    $mail->Subject  =  "Reset Password";
    $mail->IsHTML(true);
    $mail->Body    ="To reset your password for the username<br>{$username}<br>Click on the link below.<br><br>{$link}<br><br>" .
            "This is an automated email, please do not respond.<br>";

    if( !$mail->Send()) {
        throw new InvalidArgumentException("Mail Error - >" . $mail->ErrorInfo);
    }//end if
}//end function


processForgotPasswordRequest();
?>