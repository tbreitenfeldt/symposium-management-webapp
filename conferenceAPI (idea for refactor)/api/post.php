<?php
function postData($pdoUtil, $table, $attrs, $values) {
if ( !empty($table){
	$sql = "INSERT INTO ".$table." ("; 
	foreach($attrs as $a){
		$sql .= $a.",";
	}
	$sql = substr($sql, 0, strlen($sql) -1);
	$sql .= ") VALUES (";
	foreach($values as $val){
		$sql .= $val.",";
	}
	$sql = substr($sql, 0, strlen($sql) -1);
	$sql .= ");";
	try {
		$result = pdoUtil->query($sql, []);
		http_response_code(201);
		echo json_encode("Create Successful");
	} catch (Exception $e) {
		error_log($e->getMessage());
		exit($e->getMessage());
	}
}

}
?>