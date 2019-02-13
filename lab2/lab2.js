var action = "encode";
function jsonEnDeCode(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("json-txt").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "lab2-geojson.php?action=" + action, true);
    xmlhttp.send();

    if(action == "encode"){
        action = "decode";
    } else if (action == "decode"){
        action = "encode";
    }
}
