<?php
include_once("../databaseUtil/creds.php");
include_once("../databaseUtil/pdoUtil.php");

$uid = -1;
$aid = -1;

session_start();
if(isset($_SESSION["user_id"])) $uid = $_SESSION["user_id"];
else if (isset($_SESSION["admin_id"])) $aid = $_SESSION["admin_id"];

$pdoUtil = PDOUtil::createPDOUtil();
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
session_write_close();

function shorten($string, $shortenBy){
	$return = substr($string, 0, strlen($string) - $shortenBy);
	return $return;
}
?>