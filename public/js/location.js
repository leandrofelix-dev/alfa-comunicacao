let a = -6.789707; //latitude
let b = -39.304153; //longitude

const map = L.map('map').setView([a, b], 17);
const mapDesktop = L.map('mapDesktop').setView([a, b], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(mapDesktop);

let alfaIcon = L.icon({iconUrl: '../public/assets/img/pinAlfa.png', iconSize:[30, 40]});
let alfaIconDesktop = L.icon({iconUrl: '../public/assets/img/pinAlfa.png', iconSize:[30, 40]});

L.marker([a, b], {icon: alfaIcon}).addTo(map);
L.marker([a, b], {icon: alfaIconDesktop}).addTo(mapDesktop);
