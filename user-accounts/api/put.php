<?php
parse_str(file_get_contents('php://input'), $_PUT);

if (isset($_PUT["table_name"])) {

	try {
		$table = $_PUT["table_name"];
		$target_name = $_PUT["target_id_name"];
		$target_value = $_PUT["target_id_value"];
		$attrs = (array) $_PUT["attrs"];
		$values = (array) $_PUT["values"];

		$sql = "UPDATE $table SET ";
		for($i = 0; $i < sizeof($attrs); $i++){
			$sql .= $attrs[$i] . " = " . $values[$i] . ", ";
		}
		$sql = substr($sql, 0, strlen($sql) -2);
		$sql .= " WHERE " . $target_name . " = " . $target_value . ";";
		
		$result = PDOQuery($sql,[],$dsn,$user,$pw);
		http_response_code(201);
		echo json_encode("Update Succesful");
	} catch (Exception $e) {
		error_log($e->getMessage());
		exit('Error processing');
	}
}
?>