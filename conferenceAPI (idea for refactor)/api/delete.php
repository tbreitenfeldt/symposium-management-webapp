<?php
function deleteData($id_name, $id_value, $table) {
	try {
		$result = $pdoUtil->query("DELETE FROM $table WHERE $id_name = $id_value", []);
			
		http_response_code(200);
		echo "Delete Succesful";
	} catch (Exception $e) {
		error_log($e->getMessage());
		exit('Error processing');
	}
} 
?>