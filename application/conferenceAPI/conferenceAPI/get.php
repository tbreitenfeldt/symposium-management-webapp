<?php
if(isset($_GET["genFlag"])){
	$sql = "SELECT ";
	
	$tables = (array)$_GET["table_names"];
	
	if(empty($_GET["attrs"]) && empty($_GET["values"])){
	    $attrs = [];
	    $values = [];
	} else {
	   	$attrs = (array)$_GET["attrs"];
	   $values = (array)$_GET["values"]; 
	}

	
	foreach($tables as $tn){
	    if($tn == "user_accounts" || $tn == "admin_accounts"){
	        exit("Access Restricted");
	    }
	}
	
	if(!empty($_GET["values_to_select"])){
		$selectValues = (array)$_GET["values_to_select"];
		foreach($selectValues as $sv){
			$sql .= $sv.",";
		}	
		$sql = shorten($sql, 1);
	}

	if(!empty($_GET["table_names"])){
		$tables = (array)$_GET["table_names"];
		$sql .= " FROM ";
	
		$join = " NATURAL JOIN ";
		
		foreach($tables as $tn){
			$sql .= $tn . "" . $join;
		}
		$sql = shorten($sql, strlen($join));
	}

	
	if(!empty($attrs) && !empty($values)){
		$sql .= " WHERE ";
		//$attrs = (array)$_GET["attrs"];
		//$values = (array)$_GET["values"];	
		$and = " AND ";
		for($i = 0; $i < sizeof($attrs); $i++){
			$sql .= $attrs[$i] . " = ? AND ";
		}
		$sql = shorten($sql, strlen($and));
	}
	
	$sql .= ";";
	
	try{

	    if(empty($values)) $values = [];
		$result = $pdoUtil->query($sql, $values);

		if($result){
			http_response_code(200);
			echo json_encode($result);
		} else {
			http_response_code(204);
			exit("No Content");
		}
	} catch (Exception $e){
		error_log($e->getMessage());
		exit($e->getMessage());
	}
}
?>