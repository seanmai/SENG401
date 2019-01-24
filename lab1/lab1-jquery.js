var heading = $(".heading");
var cityDescription = $(".map-description");
var calgary = {
    name: "Calgary",
    latitude: 51.0486,
    longitude: -114.0708,
    population: 1096833,
    area: 825.29,
}
var edmonton = {
    name: "Edmonton",
    latitude: 53.5444,
    longitude: -113.4909,
    population: 960015,
    area: 684.37,
}

$("p").each(function(){
    $(this).mouseover(function(){
        $(this).css("color", "red");
    });
    $(this).mouseout(function(){
        $(this).css("color", "inherit");
    });
});


$("section").each(function(){
    $(this).mouseover(function(){
        var headingTitle = $(this).attr('id').substr(0, $(this).attr('id').indexOf('-'));
        $(".heading").html(headingTitle);
    });
    $(this).mouseout(function(){
        $(".heading").html("");
    });
});

$(".city").each(function(){
    if($(this).attr('id') == "calgary"){
        var cityInfo = calgary;

    } else if($(this).attr('id') == "edmonton"){
        var cityInfo = edmonton;
    }
    $(this).mouseover(function(){
        var name = "<p>Name: " + cityInfo.name + "</p>"
        var latitude = "<p>Latitude: " + cityInfo.latitude + "</p>"
        var longitude = "<p>Longitude: " + cityInfo.longitude + "</p>"
        var population = "<p>Population: " + cityInfo.population + "</p>"
        var area = "<p>Area: " + cityInfo.area + "</p>"
        var density = "<p>Density: " + (cityInfo.population/cityInfo.area).toFixed(4) + "</p>"
        cityDescription.append(name, latitude, longitude, population, area, density);
    });
    $(this).mouseout(function(){
        cityDescription.html("");
    });
});
