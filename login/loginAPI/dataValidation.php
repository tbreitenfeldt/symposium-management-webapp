<?php

require_once "config.php";



function validateUsername($pdoUtil, $username) {
    $usernameRegex = '/^[A-Za-z][A-Za-z0-9\.\-]{5,31}$/';

    if (empty($username)) {
        throw new InvalidArgumentException("Please enter a username");
    }//end if
    if (strlen($username) < 5 || strlen($username) > 30) {
        throw new InvalidArgumentException("Invalid username. Your username should have at least 5 characters, and no more than 30 characters.");
    }//end if
    if ( !preg_match($usernameRegex, $username)) {
        throw new InvalidArgumentException("Invalid username. Your username must start with a letter, and may contain only letters, numbers, dashes, and periods.");
    }//end if

    $username = strtolower($username);
    $c = "constant";
    $sql = "SELECT {$c('USER_ID_FIELD')} from {$c('USER_TABLE_NAME')} where {$c('USERNAME_FIELD')}=?";
    $results = $pdoUtil->query($sql, [$username]);

    if (sizeof($results) != 0)  {
        throw new InvalidArgumentException("that username has already been chosen, please choose another username.");
    }//end if
}//end function


function validatePassword($password, $confirmPassword) {
    if (empty($password)) {
        throw new InvalidArgumentException("Please enter a password");
    }//end if
    if (strlen($password) < 6) {
        throw new InvalidArgumentException("Invalid password. Your password should have at least 6 characters.");
    }//end if
    if (empty($confirmPassword)) {
        throw new InvalidArgumentException("Please confirm your password.");
    }//end if
    if ($password != $confirmPassword) {
        throw new InvalidArgumentException("Your passwords did not match.");
    }//end if
}//end function


function validateEmail($email) {
}//end function }


function validatePhone($phone) {
}//end function
?>