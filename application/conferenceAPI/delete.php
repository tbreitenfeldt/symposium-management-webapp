<?php
parse_str(file_get_contents('php://input'), $_DELETE);
if (isset($_DELETE["id_name"]) && isset($_DELETE["id_value"]) && isset($_DELETE["table_name"])) {
	try {
		$table = $_DELETE["table_name"];
		$tablecheck  = preg_replace("/[^a-zA-Z0-9]/", "", $table);
		$id_name = (array)$_DELETE["id_name"];
		$id_value = (array)$_DELETE["id_value"];
		$sql = "DELETE FROM $table WHERE ";
		
		if($tablecheck == "useraccounts" || $tablecheck == "adminaccounts"){
		    exit("Access Restricted");
		} else if ($tablecheck == "userschedule"){
		    for($i = 0; $i < sizeof($id_name); $i++){
		        $curname = preg_replace("/[^a-zA-Z0-9]/", "", $id_name[$i]);
		        if($curname == "userid"){
		            if($id_value[$i] != $uid) exit("Access Restricted (uid mismatch)");
		        }
		    }
		} else {
		    for($i = 0; $i < sizeof($id_name); $i++){
		        $curname = preg_replace("/[^a-zA-Z0-9]/", "", $id_name[$i]);
		        if($curname == "adminid"){
		            if($id_value[$i] != $aid) exit("Access Restricted (aid mismatch)");
		             
		        }
		        
		    }
		}
		
		foreach($id_name as $a){
		    $sql .= $a . " = ? AND ";
		}
		$sql = shorten($sql, strlen(" AND "));
		$sql.=";";

		$result = $pdoUtil->query($sql, $id_value);
			
		http_response_code(200);
		echo "success";
	} catch (Exception $e) {
		error_log($e->getMessage());
		exit('Error processing');
	}
} 