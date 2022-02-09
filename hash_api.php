<?php 

$password = $_GET["password"];

if (strlen($password) >= '8' && preg_match("#[0-9]+#",$password) && 
(preg_match("#[A-Z]+#",$password) || preg_match("#[a-z]+#",$password))){
echo json_encode(["result" => true, "hash" => hash('sha256',$password)]);
} else {
echo json_encode(["result" => false, "hash" => hash('sha256',$password)]);
}

?>


