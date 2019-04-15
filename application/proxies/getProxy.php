<?php

require_once "httpRequester.php";


function getFromConferenceAPI() {
    if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["table_names"])) {
        $tableName = $_GET["table_names"][0];

        if ($tableName == "conference") {
            addSessionVariableToData("admin_id");
        }//end if
    }//end if
}//end function


function addSessionVariableToData($idName) {
    session_start();

    if (isset($_SESSION[$idName]) && isset($_GET["attrs"]) && isset($_GET["values"])) {
        if (sizeof($_GET["attrs"]) == 1 && $_GET["attrs"][0] == "") {
            $_GET["attrs"] = [];
            $_GET["values"] = [];
        }//end if

        array_push($_GET["attrs"], $idName);
        array_push($_GET["values"], $_SESSION[$idName]);
        session_write_close();

        $url = DOMAIN . "/conferenceAPI/index.php";
        $response = HTTPRequester::HTTPGet($url, $_GET);
        echo $response;
    }//end if

    if (session_status() === PHP_SESSION_ACTIVE) {
            session_write_close();
    }//end if
}//end function


getFromConferenceAPI();
?>