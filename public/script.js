
var map = L.map('map').setView([60.1699, 24.9384], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var uusiTaso = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Kartta-aineisto © OpenTopoMap'
}).addTo(map);