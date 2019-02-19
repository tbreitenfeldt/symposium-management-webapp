<?php
include_once("./creds.php");
include_once("./pdoutils.php");

$request = $_SERVER["REQUEST_METHOD"];
try{
	if ($request == "POST") {
		include_once("./post.php");
	}
	else if ($request == "GET"){
		include_once("./get.php");
	}
	else if ($request == "DELETE"){
		include_once("./delete.php");
	}
	else if ($request == "PUT"){
		include_once("./put.php");
	}
} catch (Exception $e){
	error_log($e->getMessage());
	exit($e->getMessage());
}

function shorten($string, $shortenBy){
	$return = substr($string, 0, strlen($string) - $shortenBy);
	return $return;
}
?>