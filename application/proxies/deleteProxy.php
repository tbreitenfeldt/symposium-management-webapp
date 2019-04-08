<?php

require_once "httpRequester.php";


function deleteFromConferenceAPI() {
    parse_str(file_get_contents('php://input'), $_DELETE);

    if ($_SERVER["REQUEST_METHOD"] == "DELETE" && isset($_DELETE["table_name"])) {
        $tableName = $_POST["table_name"];

        if ($tableName == "conference") {
            addSessionVariableToData("admin_id");
        } else if($tableName == "user_schedule") {
            addSessionVariableToData("user_id");
        } else if ($tableName == "user_conference") {
            addSessionVariableToData("user_id");
        }//end else if
    }//end if
}//end function


function addSessionVariableToData($idName) {
    parse_str(file_get_contents('php://input'), $_DELETE);
    session_start();

    if (isset($_SESSION[$idName]) && isset($_DELETE["id_name"]) && isset($_DELETE["id_value"])) {
        $_DELETE["id_name"] = $idName;
        $_DELETE["id_value"] = $_SESSION[$idName];

        $url = DOMAIN . "/conferenceAPI/index.php";
        $response = HTTPRequester::HTTPDelete($url, $_DELETE);
        echo $response;
    }//end if

    session_write_close();
}//end function


deleteFromConferenceAPI();
?>