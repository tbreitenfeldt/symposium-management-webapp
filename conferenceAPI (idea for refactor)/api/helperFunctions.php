<?php

function shorten($string, $shortenBy){
	$return = substr($string, 0, strlen($string) - $shortenBy);
	return $return;
}

?>