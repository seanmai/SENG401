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

function ajaxFormSubmit(){
    var xmlhttp= window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            document.getElementById("form-response").innerHTML = this.responseText;
        }
    }
    var latitude1= document.getElementById('latitude1').value;
    var longitude1= document.getElementById('longitude1').value;
    var latitude2= document.getElementById('latitude2').value;
    var longitude2= document.getElementById('longitude2').value;
    xmlhttp.open("GET","lab2-form.php?latitude1=" + latitude1 + "&longitude1=" + longitude1 + "&latitude2=" + latitude2 + "&longitude2=" + longitude2 , true);
    xmlhttp.send();
    return false;
}
