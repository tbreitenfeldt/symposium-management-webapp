<?php
define("USER_TABLE_NAME", "UserAccounts");
define("USER_ID_FIELD", "userID");
define("USERNAME_FIELD", "username");
define("USER_PASSWORD_FIELD", "userPassword");
define("FAILED_LOGIN_COUNT_FIELD", "userFailedLoginCount");
define("FIRST_FAILED_LOGIN_FIELD", "userFirstFailedLogin");

//other data that you want added as session variables when the user logs in, it is also aditional data that is expected in registration 
//it is read as an associative array, where each key is a string containing a name of a field in the database, and each value is the name of a validation function as a string
//the validation function is expected  to be in dataValidation.php, and only take one argument, the data for that field.
//the name of the field in the database, will be the name of the session variable 
//for eexample: array("userEmail"=>"validateEmail", "userPhone"=>"validatePhone"), where userEmail and userPhone are fields in the database,
//and validateEmail and validatePhone are names of functions found in dataValidation.php.
//note: registerFunctions.php expects the incoming post data to have keys that match the name of the fields. So if collecting data from a html form,
//give ids and names the same field name as the name in the database.
define("USER_DATA_FIELDS", array("userEmail"=>"validateEmail", "userPhone"=>"validatePhone"));

define("LOGIN_PAGE_NAME", "login.php");
define("LOGGEDIN_LANDING_PAGE_NAME", "WELCOME.PHP");

define("LOGIN_ATTEMPT_LIMIT", 5);
define("LOCKOUT_TIME", 180);

?>