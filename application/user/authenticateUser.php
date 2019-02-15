<?php
session_start();

if ( !isset($_SESSION["user_loggedin"]) || !$_SESSION["user_loggedin"] || !isset($_SESSION["user"]) || $_SESSION["user"] != "user") {
    header("location: login.php");
    exit;
}//end if

session_write_close();
?>