<?php

echo json_encode(["result" => 2 * $_GET["x"] + $_GET["y"] % 2]);

?>