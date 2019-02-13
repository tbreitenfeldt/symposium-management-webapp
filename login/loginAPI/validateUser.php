<?php

require_once "config.php";

session_start();

if ( !isset($_SESSION["loggedin"]) || !$_SESSION["loggedin"]) {
    header("location: " . LOGIN_PAGE_NAME);
    exit;
}//end if

?>