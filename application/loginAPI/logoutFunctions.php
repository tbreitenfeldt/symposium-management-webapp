<?php
require_once "includeConfig.php";



function logout() {
    session_start();
    $_SESSION = array();
    session_destroy();
    header("location: " . LOGIN_PAGE_NAME);
    session_write_close();
    exit;
}//end function


logout();
?>