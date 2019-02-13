<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
        <script src="lab2.js" charset="utf-8"></script>
    </head>
    <body>
        <div class="json-container" style="margin-bottom: 100px;">
            <button type="button" name="button" id="json-btn" onclick="jsonEnDeCode()">Decode/Encode</button>
            <p>Parsed JSON: </p>
            <span id="json-txt"></span>
        </div>
        <div class="form-container">
            <h4>Coordinate Form:</h4>
            <!-- <form class="" action="lab2-form.php" method="POST"> -->
            <form class="" action="" onsubmit="return ajaxFormSubmit(); return false;" method="GET">
                <div class="">
                    Latitude: <input id="latitude1" type="text" name="latitude1" value="">
                    Longitude: <input id="longitude1" type="text" name="longitude1" value="">
                </div>
                <div class="">
                    Latitude: <input id="latitude2" type="text" name="latitude2" value="">
                    Longitude: <input id="longitude2" type="text" name="longitude2" value="">
                </div>
                <input type="submit" name="" value="Submit" style="display: block">
            </form>
            <div id="form-response">
            </div>
        </div>
    </body>
</html>
