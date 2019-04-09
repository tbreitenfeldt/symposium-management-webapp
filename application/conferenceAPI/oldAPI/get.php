<?php
//include "./chromephp-master/ChromePhp.php";
if(isset($_GET["genFlag"])){
	$sql = "SELECT ";
	
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

	
	if(!empty($_GET["attrs"]) && !empty($_GET["values"])){
		$sql .= " WHERE ";
		$attrs = (array)$_GET["attrs"];
		$values = (array)$_GET["values"];	
		$and = " AND ";
		for($i = 0; $i < sizeof($attrs); $i++){
			$sql .= $attrs[$i] . " = " . $values[$i] . " AND ";
		}
		$sql = shorten($sql, strlen($and));
	}

	
	$sql .= ";";
	
	//If you are looking at this, this was debugging code from a Chrome Web Extension that may not work on your computer, so I've commented it out.
	//ChromePhp::log($sql);
	
	try{
		$result = PDOQuery($sql, [], $dsn,$user,$pw);

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