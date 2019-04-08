<?php

require_once "httpRequester.php";


function postToConferenceAPI() {
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["table_name"])) {
        $tableName = $_POST["table_name"];

        if ($tableName == "conference") {
            addSessionVariableToData("admin_id");
        } else if ($tableName == "event") {
            addSessionVariableToData("admin_id");
        } else if($tableName == "user_schedule") {
            addSessionVariableToData("user_id");
        } else if ($tableName == "user_conference") {
            addSessionVariableToData("user_id");
        }//end else if
    }//end if
}//end function


function addSessionVariableToData($idName) {
    session_start();

    if (isset($_SESSION[$idName]) && isset($_POST["attrs"]) && isset($_POST["values"])) {
        array_push($_POST["attrs"], $idName);
        array_push($_POST["values"], $_SESSION[$idName]);

        $url = DOMAIN . "/conferenceAPI/index.php";
        $response = HTTPRequester::HTTPPost($url, $_POST);
        echo $response;
    }//end if

    session_write_close();
}//end function


postToConferenceAPI();
?>