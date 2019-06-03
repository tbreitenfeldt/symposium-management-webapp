<?php
if (isset($_POST["table_name"])){
	$table = $_POST["table_name"];
	$attrs = (array)$_POST["attrs"];
	$values = (array)$_POST["values"];
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
//die($sql);
	try {
		$result = PDOQuery($sql, [], $dsn, $user, $pw);
		http_response_code(201);
		echo json_encode("Create Succesful");
	} catch (Exception $e) {
		error_log($e->getMessage());
		exit($e->getMessage());
	}
}
?>

