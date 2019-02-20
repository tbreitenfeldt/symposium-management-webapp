<?php
//include "./chromephp-master/ChromePhp.php";

function getData($pdoUtil, $selectValues, $tables, $attrs, $values) {
if(isset($_GET["genFlag"])){
	$sql = "SELECT ";
	
	if(!empty($selectValues)){
		foreach($selectValues as $sv){
			$sql .= $sv.",";
		}	
		$sql = shorten($sql, 1);
	}

	if(!empty($tables)){
		$sql .= " FROM ";
	
		$join = " NATURAL JOIN ";
		
		foreach($tables as $tn){
			$sql .= $tn . "" . $join;
		}
		$sql = shorten($sql, strlen($join));
	}

	
	if(!empty($attrs) && !empty($values)){
		$sql .= " WHERE ";
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
		$result = $pdoUtil->query($sql, []);

		if($result){
			http_response_code(200);
			echo json_encode($result);
		} else {
            echo json_encode(array());
			http_response_code(204);
		}
	} catch (Exception $e){
		error_log($e->getMessage());
		exit($e->getMessage());
	}
}

}
?>