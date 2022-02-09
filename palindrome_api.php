<?php

$string = $_GET["string"];

 if (strrev($string) == $string){ 
echo json_encode(["result" => true]);
    }
    else{
echo json_encode(["result" => false]);
    }

?>