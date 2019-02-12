<?php
session_start();


function logout() {
    $_SESSION = array();
    session_destroy();
    header("location: login.php");
    exit;
}//end function


logout();
?>