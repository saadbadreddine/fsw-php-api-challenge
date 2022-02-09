<?php

echo json_encode(["resut" => 2 * $_GET["x"] + $_GET["y"] % 2]);

?>