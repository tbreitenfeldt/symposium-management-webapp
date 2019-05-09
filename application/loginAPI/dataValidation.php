<?php

require_once "includeConfig.php";



function validateUsername($username) {
    if ( !isset($username)) {
        throw new InvalidArgumentException("No username is defined.");
    }//end if


    $usernameRegex = '/^[A-Za-z][A-Za-z0-9\.\-]{3,31}$/';

    if (empty($username)) {
        throw new InvalidArgumentException("Please enter a username");
    }//end if
    if ( !preg_match($usernameRegex, $username)) {
        throw new InvalidArgumentException("Invalid username or password.");
    }//end if
}//end function


function validatePassword($password) {
    if ( !isset($password)) {
        throw new InvalidArgumentException("No password is defined.");
    }//end if
    if (empty($password)) {
        throw new InvalidArgumentException("Please enter your password");
    }//end if
    if (strlen($password) < 6) {
        throw new InvalidArgumentException("Invalid password. Your password should have at least 6 characters.");
    }//end if
}//end function


function validatePasswordConfirmation($password, $confirmPassword) {
    if ( !isset($password) && !isset($confirmPassword)) {
        throw new InvalidArgumentException("No password or confirm password is defined.");
    }//end if

    validatePassword($password);

    if (empty($confirmPassword)) {
        throw new InvalidArgumentException("Please confirm your password.");
    }//end if
    if ($password != $confirmPassword) {
        throw new InvalidArgumentException("Your passwords did not match.");
    }//end if
}//end function


function validateEmail($email) {
    if ( !isset($email)) {
        throw new InvalidArgumentException("No email is defined.<br>$email");
    }//end if

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new InvalidArgumentException( "Invalid email address. Email entered: " . $email);
    }
}//end function 


function validatePhone(&$phone) {
    if ( !isset($phone)) {
        throw new InvalidArgumentException("No phone is defined.");
    }//end if

    if($_POST["user_notifyByPhone"] == 1){
        $numbersOnly = preg_replace("/[^0-9]/", "", $phone);
        $numberOfDigits = strlen($numbersOnly);
        if (!($numberOfDigits == 7 || $numberOfDigits == 10)) {
            throw new InvalidArgumentException("Invalid Phone Number format.");
        } 
        $phone = $numbersOnly; 
    } else {
        $phone = "";
    }
}//end function

function validateDate($year, $month, $day){
    if(!(checkdate($month, $day, $year))){
        throw new InvalidArgumentException("Invalid date format. Expected YYYY-MM-DD");
    }
}

function validateTime($time, $format = "hh:ii:ss"){
    $dateObj = DateTime::createFromFormat($format, $time);
    if(!( $dateObj && $dateObj->format($format) == $time)){
        throw new InvalidArgumentException("Invalid time format. Expected 'hh:mm:ss'.");
    }
}

/*usage: date_from_user can be the same as start_date/end_date when you just need to make sure that
            they start date and end date are valid.
            Can also be used for checking if any date is valid within this range, date_from_user
            being the date we need to check between the start_date and the end_date.
*/
function check_date_in_range($start_date, $end_date, $date_from_user)
{

    $start_ts = strtotime($start_date);
    $end_ts = strtotime($end_date);
    $user_ts = strtotime($date_from_user);
    

    if (!(($user_ts >= $start_ts) && ($user_ts <= $end_ts))){
        throw new InvalidArgumentException("Date entered is not in range. Range: " . $start_date . 
                                            " to " . $end_date . " ; You entered: " .
                                            $date_from_user);
    }
}


function validateNotificationByEmail($field) {
    $_POST["user_notifyByEmail"] = setCheckboxValue($field);
}//end function


function validateNotificationByPhone($field) {
    $_POST["user_notifyByPhone"] = setCheckboxValue($field);
}//end function


function setCheckboxValue($field) {
    if (isset($field)) {
        if ($field == "true" || $field == 1) {
            return 1;
        } else {
            return 0;
        }//end else
    }//end if


        return 0;
}//end function


function validatePhoneCarrier($carrier) {
    if ( !isset($carrier)) {
        throw new InvalidArgumentException("No carrier is defined.");
    }//end if

    if($_POST["user_notifyByPhone"] == 1){
            $match = false;

        foreach(USER_PHONE_CARRIERS as $carrierName){
            if($carrier == $carrierName){
                $match = true;
            }
        }
        if($match == false){
            throw new InvalidArgumentException("Carrier is invalid. Carrier entered: " . $carrier);
        }
    } else {
        $carrier = "";
    }
}//end function
?>