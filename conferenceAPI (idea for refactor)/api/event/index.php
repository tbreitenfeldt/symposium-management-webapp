<?php

require_once "../../databaseUtil/pdoUtil.php";
require_once "../helperFunctions.php";


/*
 * Fields for event table
 * ["event_id", "conference_id  event_name", "event_starttime", "event_endtime", "event_room",
 *"event_floor", "event_building", "event_speakers", "event_desc", "event_wheelchair", "event_date"]
*/
function requestData() {
    $pdoUtil = PDOUtil::createPDOUtil();
    $tables = ["event"];  //for the get request
    $selectValues = ["*"];  //for the get request
    $table = $tables[0];  //used in post, put, and delete requests

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        if (isset($_GET["attrs"]) && isset($_GET["values"])) {
            require_once "../get.php";
            //set genFlag here in $_GET to insure that get requests can only take place through the php, and remove genFlag from javascript data map used in ajax call
            $attrs = json_decode($_GET["attrs"]);
            $values = json_decode($_GET["values"]);
            getData($pdoUtil, $selectValues, $tables, $attrs, $values);
        }//end if
    } else if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["attrs"]) && isset($_POST["values"])) {
            require_once "../post.php";
            $attrs = $_POST["attrs"];
            $values = $_POST["values"];
            postData($pdoUtil, $table, $attrs, $values);
        }//end if
    } else if ($_SERVER["REQUEST_METHOD"] == "PUT") {
        parse_str(file_get_contents('php://input'), $_PUT);

        if (isset($_PUT["target_id_name"]) && isset($_PUT["target_id_value"]) && isset($_PUT["attrs"]) && isset($_PUT["values"])) {
            require_once "../put.php";
            $target_name = $_PUT["target_id_name"];
            $target_value = $_PUT["target_id_value"];
            $attrs = $_PUT["attrs"];
            $values = $_POST["values"];
            putData($pdoUtil, $table, $target_name, $target_value, $attrs, $values);
        }//end if
    } else if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
        parse_str(file_get_contents('php://input'), $_DELETE);

        if (isset($_DELETE["id_name"]) && isset($_DELETE["id_value"]) && isset($_DELETE["table_name"])) {
            require_once "../delete.php";
            $id_name = $_DELETE["id_name"];
            $id_value = $_DELETE["id_value"];
            deleteData($id_name, $id_value, $table);
        }//end if
    }//end else if 

    $pdoUtil->close();
}//end function


requestData();
?>