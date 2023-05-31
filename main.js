import './style.css';

// 1. Initialize the map and set its view to our chosen 
// geographical coordinates and a zoom level
// (появляется пустая серая карта с кнопками "+" и "-")
const map = L.map('map').setView([51.505, -0.09], 13);
console.log(L)

// 2. Add a tile layer to add to our map, 
// in this case it’s a OpenStreetMap tile layer.
// (появляется рисунок с улицами и т.п.)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 3. Add some figure

// 3.1 Аdd a marker
const marker = L.marker([51.5, -0.09]).addTo(map);

// 3.2 Add a circle
const circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

// 3.3 Add a polygon
const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

// 4. Working with popups
// openPopup method (for markers only) immediately opens the attached popup
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
// use popups as layers
const popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);


// 5. Dealing with events
// Opens popup when user clicks on the map
const popup2 = L.popup();

function onMapClick(e) {
    popup2
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
