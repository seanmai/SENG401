var heading = document.querySelector(".heading");
var cityDescription = document.querySelector(".map-description");
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

document.querySelectorAll("p").forEach(function(text){
    text.addEventListener('mouseover', function(){
        this.style = "color: red;";
    });
    text.addEventListener('mouseout', function(){
        this.style = "color: inherit;"
    });
})

document.querySelectorAll("section").forEach(function(section){
    section.addEventListener('mouseover', function(){
        heading.innerHTML = this.id.substr(0, this.id.indexOf('-'));
    });
    section.addEventListener('mouseout', function(){
        heading.innerHTML = "";
    });
});

document.querySelectorAll(".city").forEach(function(city){
    if(city.id == "calgary"){
        var cityInfo = calgary;
    } else if(city.id == "edmonton"){
        var cityInfo = edmonton
    }
    city.addEventListener('mouseover', function(){
        var p = document.createElement("p");
        var node = document.createTextNode("Name: " + cityInfo.name);
        p.appendChild(node);
        cityDescription.appendChild(p);
        p = document.createElement("p");
        node = document.createTextNode("Latitude: " + cityInfo.latitude);
        p.appendChild(node);
        cityDescription.appendChild(p);
        p = document.createElement("p");
        node = document.createTextNode("Longitude: " + cityInfo.longitude);
        p.appendChild(node);
        cityDescription.appendChild(p);
        p = document.createElement("p");
        node = document.createTextNode("Population: " + cityInfo.population);
        p.appendChild(node);
        cityDescription.appendChild(p);
        p = document.createElement("p");
        node = document.createTextNode("Area: " + cityInfo.area);
        p.appendChild(node);
        cityDescription.appendChild(p);
        p = document.createElement("p");
        node = document.createTextNode("Density: " + (cityInfo.population/cityInfo.area).toFixed(4));
        p.appendChild(node);
        cityDescription.appendChild(p);
    });
    city.addEventListener('mouseout', function(){
        cityDescription.innerHTML = '';
    });
});
