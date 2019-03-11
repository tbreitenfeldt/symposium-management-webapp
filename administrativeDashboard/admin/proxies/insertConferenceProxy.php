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

$response = HTTPRequester::HTTPPost("http://localhost/symposium-management-webapp/administrativeDashboard/api/", $data);

echo $response;
//echo "values: " . sizeof($values) . "<br>" . var_dump($values) . "<br>attrs: " . sizeof($attrs) . "<br>" var_dump($attrs) . "<br>";
?>