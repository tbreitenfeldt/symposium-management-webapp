<?php
require_once "httpRequester.php";


function putToConferenceAPI() {
    parse_str(file_get_contents('php://input'), $_PUT);

    if ($_SERVER["REQUEST_METHOD"] == "PUT" && isset($_PUT["table_name"])) {
        $tableName = $_PUT["table_name"];

        if ($tableName == "conference") {
            addSessionVariableToData("admin_id", $_PUT);
        } else if ($tableName == "event") {
            addSessionVariableToData("admin_id", $_PUT);
        } else if($tableName == "user_schedule") {
            addSessionVariableToData("user_id", $_PUT);
        } else if ($tableName == "user_conference") {
            addSessionVariableToData("user_id", $_PUT);
        } else if ($tableName == "user_accounts") {
            $_PUT["updateUserDataFlag"] = true;
            addSessionVariableToData("user_id", $_PUT);
        }//end else if
    }//end if
}//end function


function addSessionVariableToData($idName, &$putData) {
    session_start();
    $tableName = $putData["table_name"];

    if (isset($_SESSION[$idName]) && isset($putData["attrs"]) && isset($putData["values"]) && isset($putData["target_id_name"]) && isset($putData["target_id_value"])) {
        if (sizeof($putData["target_id_name"]) == 1 && $putData["target_id_name"][0] == "") {
            $putData["target_id_name"] = array();
            $putData["target_id_value"] = array();
        }//end if
        array_push($putData["target_id_name"], $idName);
        array_push($putData["target_id_value"], $_SESSION[$idName]);
            session_write_close();

        $url = DOMAIN . "/conferenceAPI/index.php";
        $response = HTTPRequester::HTTPPut($url, $putData);

        if ($response == json_encode("success")) {
            if ($tableName == "user_accounts") {
                modifyUserSessionVariables($putData);
            } else if ($tableName == "admin_accounts") {
                modifyAdminSessionVariables($putData);
            }//end else if
        }//end if

        echo $response;
    }//end if

    if (session_status() === PHP_SESSION_ACTIVE) {
        session_write_close();
    }//end if
}//end function


function modifyUserSessionVariables(&$putData) {
    if (sizeof($putData["attrs"]) != sizeof($putData["values"])) {
        exit("Invalid data");
    }//end if

    session_start();
    setSessionVariable("user_name", $putData);
    setSessionVariable("user_email", $putData);
    setSessionVariable("user_phone", $putData);
    setSessionVariable("user_notifyByPhone", $putData);
    setSessionVariable("user_notifyByEmail", $putData);
    session_write_close();
}//end function


function modifyAdminSessionVariables($putData) {
    if (sizeof($putData["attrs"]) != sizeof($putData["values"])) {
        exit("Invalid data");
    }//end if

    session_start();
    setSessionVariable("admin_name", $putData);
    setSessionVariable("admin_email", $putData);
    session_write_close();
}//end function


function setSessionVariable($name, $putData) {
    $index = array_search($name, $putData["attrs"], false);

    if ($index !== false) {
        $_SESSION[$name] = $putData["values"][$index];
    } else {
        exit("Invalid data 2");
    }//end else
}//end function


putToConferenceAPI();
?>