const cities = [
  { name: 'Várzea Alegre', cep: '63540-000', lat: -6.794393384922217, lng: -39.29822986034189 },
  { name: 'Juazeiro do Norte', cep: '63010-970', lat: -7.224263671094666, lng: -39.312992958722496 },
  { name: 'Cedro', cep: '63400-000', lat: -6.60489479703985, lng: -39.06122548745189 },
  { name: 'Lavras da Mangabeira', cep: '63300-000', lat: -6.752413879634379, lng: -38.96308048614885 },
  { name: 'Iguatu', cep: '63500-000', lat: -6.358844230679799, lng: -39.298122955182194 },
  { name: 'Icó', cep: '63430-000', lat: -6.400585326642323, lng: -38.85720656466121 },
  { name: 'Jaguaribe', cep: '63475-000', lat: -5.892776452801664, lng: -38.62204473063314 },
  { name: 'Farias Brito', cep: '63185-000', lat: -6.9261866, lng: -39.5733654}
];

const zoom = { initial: 7, max: 12 };
const center = [-6.794393384922217, -39.29822986034189];
const map = L.map('mobile-map').setView(center, zoom.initial);
const pin = L.icon({ iconUrl: '../public/assets/img/pin-alfa.png', iconSize: [30, 40] });
const layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: zoom.max });
layer.addTo(map);

for (let i = 0; i < cities.length; i++) {
  const { name, cep, lat, lng } = cities[i];
  const marker = L.marker([lat, lng], { icon: pin }).addTo(map); 
  marker.bindPopup(`<h3>${name}</h3>CEP: ${cep}`);
  L.circleMarker([lat, lng], {
    radius: 6,
    fillOpacity: 0,
    color: 'transparent',
    interactive: false
  }).addTo(map).bindTooltip(name, { permanent: true, direction: 'top', offset: [0, -15] });
}
