<?php
require_once "httpRequester.php";

$attrs = $_POST["attrs"];
$values = $_POST["values"];
$data = null;

array_push($attrs, "admin_id");
array_push($values, "12");

$data = array(
    "table_name" => $_POST["table_name"],
    "attrs" => $attrs,
    "values" => $values,
);
$domain = "http://localhost/";  //$_SERVER['HTTP_HOST'];
$path = "symposium-management-webapp/application/api/index.php";

$response = HTTPRequester::HTTPPost("{$domain/{$path}", $data);

echo $response;
//echo "values: " . sizeof($values) . "<br>" . var_dump($values) . "<br>attrs: " . sizeof($attrs) . "<br>" var_dump($attrs) . "<br>";
?>