console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl"); 
const buildMarker = require("./marker")

mapboxgl.accessToken = 'pk.eyJ1IjoidHF0cnVvIiwiYSI6ImNqejhtMjFzcDB1NTMzY21pc2tlNHUzMTYifQ.j2mY_WGvk_Max4DOannMOQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v11" // mapbox has lots of different map styles available.
});

const marker = buildMarker('restaurant', [-87.6354, 41.8885], map); // or [-87.6354, 41.8885]
marker.addTo(map);

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map); // [-87.641, 41.895] for Chicago

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// mapboxgl.accessToken = 'pk.eyJ1IjoidHF0cnVvIiwiYSI6ImNqejhtMjFzcDB1NTMzY21pc2tlNHUzMTYifQ.j2mY_WGvk_Max4DOannMOQ';
// var map = new mapboxgl.Map({
//   container: 'YOUR_CONTAINER_ELEMENT_ID',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });

