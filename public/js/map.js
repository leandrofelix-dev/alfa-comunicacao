let a = -6.789707; //latitude
let b = -39.304153; //longitude

const mobile_map = L.map('mobile-map').setView([a, b], 17);
let alfa_icon_mobile = L.icon({ iconUrl: '../public/assets/img/pin-alfa.png', iconSize: [30, 40] });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(mobile_map);
L.marker([a, b], {icon: alfa_icon_mobile}).addTo(mobile_map);
