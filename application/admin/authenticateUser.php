<?php
session_start();

if ( !isset($_SESSION["admin_loggedin"]) || !$_SESSION["admin_loggedin"] || !isset($_SESSION["user"]) || $_SESSION["user"] != "admin") {
    header("location: login.php");
    exit;
}//end if

session_write_close();
?>