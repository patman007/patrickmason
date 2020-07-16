
var mymap = L.map('mapid').setView([21.30,-157.865], 15);
var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicG1hc29uMDA3IiwiYSI6ImNpdmlwdndsODAwZzcyem54cHhodm1lZG0ifQ.c_rgB9Med-rgf2wYe_gZuQ'
var mbAttr = 'ACC GIS | Icons Courtesy of <a href="https://mapicons.mapmarker.com/">Map Icons Collection Mapbox</a>',

    //Mapbox basemap layers and layer control
    streets = L.tileLayer(mbUrl, {
        attribution: mbAttr,
        maxZoom: 18,
        id: 'mapbox.streets',
    }).addTo(mymap);


satellite = L.tileLayer(mbUrl, {
    attibution: mbAttr,
    maxZoom: 18,
    id: 'mapbox.satellite',
});

outdoors = L.tileLayer(mbUrl, {
    attribution: mbAttr,
    maxZoom: 18,
    id: 'mapbox.outdoors',
});

var baseLayers = {
    "Streets": streets,
    "Satellite": satellite,
    "Outdoors": outdoors
};

var starIcon = L.icon({
    iconUrl: 'img/star3.png',

    iconSize:       [32, 37], //size of the icon
    iconAnchor:     [16, 37], //point of the icon which will correspond to marker's location
    popupAnchor:    [0, -37]  //point from which the popup should open relative to the icon
});

var pinIcon = L.icon({
    iconUrl: 'img/pin_blue.png',

    iconSize:       [32, 37], //size of the icon
    iconAnchor:     [16, 37], //point of the icon which will correspond to marker's location
    popupAnchor:    [0, -37] //point from which the popup should open relative to the icon
});

<!--Add business location as Leaflet marker with custom icon-->
var marker = L.marker([21.293926, -157.858763], {icon: starIcon}).addTo(mymap);
marker.bindPopup("<strong>FreeMason Pedaling</strong><br> Honolulu, HI").openPopup();

// Add nearby locations as GeoJSON layer with custom icons
var places = L.geoJson(attract,{
    onEachFeature: geojsonPopup,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: pinIcon});
    }
}).addTo(mymap);

//Bind popup to GeoJSON feature with 'name' attribute from GeoJSON file
function geojsonPopup(feature, layer) {
    if (feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
}

var featureLayers = {
    "Place to Go": places
};

L.control.layers(baseLayers, featureLayers).addTo(mymap);
