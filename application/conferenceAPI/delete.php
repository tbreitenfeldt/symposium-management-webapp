<?php
parse_str(file_get_contents('php://input'), $_DELETE);

if (isset($_DELETE["id_name"]) && isset($_DELETE["id_value"]) && isset($_DELETE["table_name"])) {
	try {
		$table = $_DELETE["table_name"];
		$id_name = $_DELETE["id_name"];
		$id_value = $_DELETE["id_value"];
		$result = PDOQuery("DELETE FROM $table WHERE $id_name = $id_value",
							[],$dsn,$user,$pw);
			
		http_response_code(200);
		echo "Delete Successful";
	} catch (Exception $e) {
		error_log($e->getMessage());
		exit('Error processing');
	}
} 