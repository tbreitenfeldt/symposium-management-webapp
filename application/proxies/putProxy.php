<?php

require_once "httpRequester.php";


function putToConferenceAPI() {
    if ($_SERVER["REQUEST_METHOD"] == "PUT" && isset($_POST["table_name"])) {
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
    session_start();

    if (isset($_SESSION[$idName]) && isset($_POST["attrs"]) && isset($_POST["values"])) {
        $attrs = $_POST["attrs"];
        $values = $_POST["values"];
        $data = null;
        $url = DOMAIN . "/conferenceAPI/index.php";

        array_push($attrs, $idName);
        array_push($values, $_SESSION[$idName]);

        $data = array(
            "table_name" => $_POST["table_name"],
            "attrs" => $attrs,
            "values" => $values,
        );

        $response = HTTPRequester::HTTPPut($url, $data);
        echo $response;
    }//end if

    session_write_close();
}//end function


putToConferenceAPI();
?>