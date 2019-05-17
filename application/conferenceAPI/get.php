<?php
//include "./chromephp-master/ChromePhp.php";
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
	        exit("Access Restricted - 1");
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

	if(!empty($_GET["orderBy"])){
	    $orderby = (array)$_GET["orderBy"];
	    $sql .= " ORDER BY ";
	    foreach($orderby as $o){
            $sql .= $o . ", ";
        }
	    $sql = shorten($sql, strlen(", "));

    }


	$sql .= ";";
	//ChromePHP::log($sql);

	try{

	    if(empty($values)) $values = [];
		$result = $pdoUtil->query($sql, $values);

		if($result || $result == []){
			//escape all data for data to avoid cross site scripting

			for ($i = 0; $i < sizeof($result); $i++) {
				foreach ($result[$i] as $key=>$value) {
					//$result[$i][$key] = preg_replace('/"/', "&#34;", $value);
					$result[$i][$key] = htmlspecialchars($value);
					//$result[$i][$key] = preg_replace("/'/", "&#8217;", $value);

					//$result[$i][$key] = addslashes($value);
				}
			}

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