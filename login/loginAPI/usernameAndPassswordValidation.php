<?php

function validateUsername($pdoUtil, $username) {
    if (empty($username)) {
        throw new InvalidArgumentException("Please enter a username");
        }//end if

    $username = strtolower($username);
    $sql = "select userID from UserAccounts where username=?";
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

?>