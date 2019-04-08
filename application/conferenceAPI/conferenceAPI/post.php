<?php
if (isset($_POST["table_name"])){
	$table = $_POST["table_name"];
	$tablecheck  = preg_replace("/[^a-zA-Z0-9]/", "", $table);
	$attrs = (array)$_POST["attrs"];
	$values = (array)$_POST["values"];

	if($tablecheck == "useraccounts" || $tablecheck ==  "adminaccounts") {
	    exit("Access Restricted");
	} else if ($tablecheck == "userschedule"){
	    for($i = 0; $i < sizeof($attrs); $i++){
	        $curattrs = preg_replace("/[^a-zA-Z0-9]/", "", $attrs[$i]);
	        if($curattrs == "userid"){
	            if($values[$i] != $uid) exit("Access Restricted (uid mismatch)");
	        }
	    }
	} else {
	    $access = 0;
	    for($i = 0; $i < sizeof($attrs); $i++){
	        $curattrs = preg_replace("/[^a-zA-Z0-9]/", "", $attrs[$i]);
	        if($attrs[$i] == "adminid"){
	            if($values[$i] != $aid) exit("Access Restricted (aid mismatch)");
	            if($values[$i] == $aid) {
	                $access = 1;
	            }
	        }
	    }
	    if($access < 1) exit("Access Restricted Here");
	}

	$sql = "INSERT INTO ".$table." ("; 
	foreach($attrs as $a){
		$sql .= $a.",";
	}
	$sql = substr($sql, 0, strlen($sql) -1);
	$sql .= ") VALUES (";
	foreach($values as $val){
		$sql .= "?, ";
	}
	$sql = substr($sql, 0, strlen($sql) -2);
	$sql .= ");";
	try {
		if(empty($values)) $values = [];
		$result = $pdoUtil->query($sql, $values);
		http_response_code(201);
		echo json_encode("Create Succesful");
	} catch (Exception $e) {
		error_log($e->getMessage());
		exit($e->getMessage());
	}
}
?>

