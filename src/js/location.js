let a = -6.789707; //latitude
let b = -39.304153; //longitude

const map = L.map('map').setView([a, b], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(map);

let alfaIcon = L.icon({iconUrl: '../src/img/pinAlfa.png', iconSize:[30, 40]});
L.marker([a, b], {icon: alfaIcon}).addTo(map);
