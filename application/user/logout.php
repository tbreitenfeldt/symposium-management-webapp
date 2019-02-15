<?php
session_start();
$_SESSION["user"] = "user";
session_write_close();

require_once "../loginAPI/logoutFunctions.php";
?>