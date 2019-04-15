<?php

require_once "includeConfig.php";


function validateUsername($username) {
    $usernameRegex = '/^[A-Za-z][A-Za-z0-9\.\-]{3,31}$/';

    if (empty($username)) {
        throw new InvalidArgumentException("Please enter a username");
    }//end if
    if ( !preg_match($usernameRegex, $username)) {
        throw new InvalidArgumentException("Invalid username or password.");
    }//end if
}//end function


function validatePassword($password) {
    if (empty($password)) {
        throw new InvalidArgumentException("Please enter your password");
    }//end if
    if (strlen($password) < 6) {
        throw new InvalidArgumentException("Invalid password. Your password should have at least 6 characters.");
    }//end if
}//end function


function validatePasswordConfirmation($password, $confirmPassword) {
    validatePassword($password);

    if (empty($confirmPassword)) {
        throw new InvalidArgumentException("Please confirm your password.");
    }//end if
    if ($password != $confirmPassword) {
        throw new InvalidArgumentException("Your passwords did not match.");
    }//end if
}//end function


function validateEmail($email) {
}//end function 


function validatePhone($phone) {
}//end function


function validateNotificationByEmail($field) {
    setCheckboxValue($field);
}//end function


function validateNotificationByPhone($field) {
    setCheckboxValue($field);
}//end function


function setCheckboxValue($field) {
    if (isset($_POST[$field])) {
        $_POST[$field] = 1;
    } else {
        $_POST[$field] = 0;
    }//end else
}//end function


function validatePhoneCarrier($carrier) {
}//end function
?>