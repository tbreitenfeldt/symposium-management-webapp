<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}//end if


if (isset($_SESSION["user"])) {
    if ($_SESSION["user"] == "user") {
        require_once "../user/config.php";
    } else if ($_SESSION["user"] == "admin") {
        require_once "../admin/config.php";
    } else {
        die("Invalid session, please reload the site and try again.");
    }//end else
} else {
    die("Invalid session, please reload the site and try again.");
}//end else

session_write_close();
?>