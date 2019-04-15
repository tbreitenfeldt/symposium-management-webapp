<?php

require_once "httpRequester.php";


function putToConferenceAPI() {
    parse_str(file_get_contents('php://input'), $_PUT);

    if ($_SERVER["REQUEST_METHOD"] == "PUT" && isset($_PUT["table_name"])) {
        $tableName = $_PUT["table_name"];

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
    parse_str(file_get_contents('php://input'), $_PUT);
    session_start();

    if (isset($_SESSION[$idName]) && isset($_PUT["attrs"]) && isset($_PUT["values"]) && isset($_PUT["target_id_name"]) && isset($_PUT["target_id_value"])) {
        array_push($_PUT["attrs"], $idName);
        array_push($_PUT["values"], $_SESSION[$idName]);
            session_write_close();

        $url = DOMAIN . "/conferenceAPI/index.php";
        $response = HTTPRequester::HTTPPut($url, $_PUT);
        echo $response;
    }//end if

    if (session_status() === PHP_SESSION_ACTIVE) {
            session_write_close();
    }//end if
}//end function


putToConferenceAPI();
?>