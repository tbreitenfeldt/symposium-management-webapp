<?php

session_start();
$_SESSION["user"] = "admin";
$_SESSION["pageToAccess"] = $_SERVER["PHP_SELF"];

require_once "../loginAPI/includeConfig.php";


if ( !isset($_SESSION[LOGGEDIN_TOKEN_NAME]) || !$_SESSION[LOGGEDIN_TOKEN_NAME] ||
        !isset($_SESSION["user"]) || $_SESSION["user"] != "admin") {
    header("location: " . LOGIN_PAGE_NAME);
    exit;
}//end if

session_write_close();
?>