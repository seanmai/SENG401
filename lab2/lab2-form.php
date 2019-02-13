<?php
$latitude1 = (float)$_POST["latitude1"];
$longitude1 = (float)$_POST["longitude1"];
$latitude2 = (float)$_POST["latitude2"];
$longitude2 = (float)$_POST["longitude2"];
if((!empty($latitude1) && is_real($latitude1) && !empty($longitude1) && is_real($longitude1)) && (!empty($latitude2) && is_real($latitude2) && !empty($longitude2) && is_real($longitude2))){
    if(($latitude1 <= 90 && $latitude1 >= -90 && $longitude1 <= 180 && $longitude1 >= -180) && ($latitude2 <= 90 && $latitude2 >= -90 && $longitude2 <= 180 && $longitude2 >= -180)){
        $quadrant1 = getQuadrant($latitude1, $longitude1);
        $quadrant2 = getQuadrant($latitude2, $longitude2);
        $bearing = calculateBearing($latitude1, $longitude1, $latitude2, $longitude2);
        echo "Point 1 Quadrant: $quadrant1 </br>";
        echo "Point 2 Quadrant: $quadrant2 </br>";
        echo "Bearing angle between points is : $bearing </br>";
    } else {
        echo "Coordinates not in range";
    }
}
else{
    echo "Please enter valid inputs.";

}

function getQuadrant(float $lat, float $lon){
    $quadrant = "";
    if($lat > 0){
        $quadrant .= "N";
    } else {
        $quadrant .= "S";
    }
    if($lon > 0){
        $quadrant .= "E";
    } else {
        $quadrant .= "W";
    }
    return $quadrant;
}
function calculateBearing(float $lat1, float $lon1, float $lat2, float $lon2){
    $TWOPI = 6.2831853071795865;
    if($lat1 == $lon1 && $lat2 == $lon2){
        return 0;
    } else{
        $theta = atan2($lat2-$lat1, $lon2-$lon1);
    }
    if($theta < 0) $theta += 180;
    return $theta;
}
?>
