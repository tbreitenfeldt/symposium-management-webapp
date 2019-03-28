<?php
define("USER_TABLE_NAME", "user_accounts");
define("USER_ID_FIELD", "user_id");
define("USERNAME_FIELD", "user_name");
define("USER_PASSWORD_FIELD", "user_password");
define("FAILED_LOGIN_COUNT_FIELD", "user_failed_login_count");
define("FIRST_FAILED_LOGIN_FIELD", "user_first_failed_login");

//The property for the name attribute  for the confirm password on the registration page 
define("USER_CONFIRM_PASSWORD", "confirm_password");

//The property for the name attribute  for the old password on the reset password page  
define("USER_OLD_PASSWORD", "old_password");

//other data that you want added as session variables when the user logs in, it is also aditional data that is expected in registration 
//it is read as an associative array, where each key is a string containing a name of a field in the database, and each value is the name of a validation function as a string
//the validation function is expected  to be in dataValidation.php, and only take one argument, the data for that field.
//the name of the field in the database, will be the name of the session variable 
//for eexample: array("userEmail"=>"validateEmail", "userPhone"=>"validatePhone"), where userEmail and userPhone are fields in the database,
//and validateEmail and validatePhone are names of functions found in dataValidation.php.
//note: registerFunctions.php expects the incoming post data to have keys that match the name of the fields. So if collecting data from a html form,
//give ids and names the same field name as the name in the database.
define("USER_DATA_FIELDS",
array("user_email"=>"validateEmail", "user_phone"=>"validatePhone", "user_notifyByEmail"=>"validateNotificationByEmail", "user_notifyByPhone"=>"validateNotificationByPhone")
);

define("LOGIN_PAGE_NAME", "login.php");
define("LOGGEDIN_LANDING_PAGE_NAME", "index.php");

define("LOGIN_ATTEMPT_LIMIT", 5);
define("LOCKOUT_TIME", 180);

define("LOGGEDIN_TOKEN_NAME", "user_loggedin");
?>