<?php

$string = $_GET["string"];

 if (strrev($string) == $string){ 
echo json_encode(["resut" => true]);
    }
    else{
echo json_encode(["resut" => false]);
    }

?>