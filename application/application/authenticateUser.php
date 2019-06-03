<?php

session_start();
$_SESSION["user"] = "user";
$_SESSION["pageToAccess"] = $_SERVER["PHP_SELF"];

require_once "config.php";

if (!isset($_SESSION[LOGGEDIN_TOKEN_NAME]) || !isset($_SESSION["user"])
        || !$_SESSION[LOGGEDIN_TOKEN_NAME] || !$_SESSION[LOGGEDIN_TOKEN_NAME] || $_SESSION["user"] != "user") {
    header("location: " . LOGIN_PAGE_NAME);
    exit;
    }//end if

session_write_close();
?>