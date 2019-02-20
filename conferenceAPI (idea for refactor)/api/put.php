<?php


function putData($pdoUtil, $table, $target_name, $target_value, $attrs, $values) {
if ( !empty($table)) {
	try {
		$sql = "UPDATE $table SET ";
		for($i = 0; $i < sizeof($attrs); $i++){
			$sql .= $attrs[$i] . " = " . $values[$i] . ", ";
		}
		$sql = substr($sql, 0, strlen($sql) -2);
		$sql .= " WHERE " . $target_name . " = " . $target_value . ";";
		
		$result = $pdoUtil->query($sql,[]);
		http_response_code(201);
		echo json_encode("Update Succesful");
	} catch (Exception $e) {
		error_log($e->getMessage());
		exit('Error processing');
	}
}

}
?>