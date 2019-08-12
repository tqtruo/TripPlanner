const mapboxgl = require("mapbox-gl"); 

const iconURLS = {
    activity: "http://i.imgur.com/WbMOfMl.png",
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png"
};

const buildMarker = function(type, coords){
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    
    markerDomEl.style.backgroundImage = `url(${iconURLS[type]})`;
    console.log('markerDomE1', markerDomEl.style.backgroundImage);
    return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}

module.exports = buildMarker;