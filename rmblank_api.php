<?php

$string = $_GET["string"];
$string = str_replace('  ', ' ', $string);
echo json_encode(["result" => $string]);

?>