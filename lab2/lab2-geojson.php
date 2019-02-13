<?php
$json_file = file_get_contents("CalgarySchools.geojson");
$arr = json_decode($json_file, true);
$json_string = json_encode($arr, JSON_PRETTY_PRINT);

$action = $_GET["action"];
if($action == "encode"){
    print_r($arr);
} else if($action == "decode"){
    echo $json_string;
}

?>
