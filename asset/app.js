// ================= Layer Group =====================
const sekolahGroup = L.layerGroup();
const masjidGroup = L.layerGroup();
const tokoGroup = L.layerGroup();
const sekolahCluster = new L.markerClusterGroup();
const masjidCluster = new L.markerClusterGroup();
const tokoCluster = new L.markerClusterGroup();
// =============================================================

// ======================= Icon ================================
const iconSekolah = L.icon({
  iconUrl: "asset/leaflet/images/sekolah.png",
  iconSize: [30, 30], // size of the icon
  iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -26], // point from which the popup should open relative to the iconAnchor
});
const iconmasjid = L.icon({
  iconUrl: "asset/leaflet/images/masjid.png",
  iconSize: [30, 30], // size of the icon
  iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -26], // point from which the popup should open relative to the iconAnchor
});
const iconToko = L.icon({
  iconUrl: "asset/leaflet/images/kios.png",
  iconSize: [30, 30], // size of the icon
  iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -26], // point from which the popup should open relative to the iconAnchor
});
// ========================================================

// ===================== Marker ===========================
var masjid = [
  L.marker([-8.73241497481764, 116.5263540433374], { icon: iconmasjid })
    .addTo(masjidCluster)
    .bindPopup(` <img src="asset/leaflet/images/masjid_btl.jpeg">`),
  L.marker([-8.739428862519288, 116.52357631479985], { icon: iconmasjid })
    .addTo(masjidCluster)
    .bindPopup(` <img src="asset/leaflet/images/masjid_lendang.jpg">`),
  L.marker([-8.730582556258636, 116.51671560760974], { icon: iconmasjid })
    .addTo(masjidCluster)
    .bindPopup(` <img src="asset/leaflet/images/masjid_bagek.jpg">`),
  L.marker([-8.730389183427947, 116.52060985441477], { icon: iconmasjid })
    .addTo(masjidCluster)
    .bindPopup(` <img src="asset/leaflet/images/masjid_menceh.jpg">`),

  // Tambahkan Kornat jika lebih dari 1
];
var sekolah = [
  L.marker([-8.748713915926, 116.54388382911726], { icon: iconSekolah })
    .addTo(sekolahCluster)
    .bindPopup(` <img src="asset/leaflet/images/sd_2menceh.jpg">`),
  L.marker([-8.732134889406375, 116.52676930603165], { icon: iconSekolah })
    .addTo(sekolahCluster)
    .bindPopup(` <img src="asset/leaflet/images/paud_btl.jpeg">`),
  L.marker([-8.730850564831723, 116.51718431676184], { icon: iconSekolah })
    .addTo(sekolahCluster)
    .bindPopup(` <img src="asset/leaflet/images/sd_menceh.jpg">`),
  L.marker([-8.730736455039784, 116.51799877659693], { icon: iconSekolah })
    .addTo(sekolahCluster)
    .bindPopup(` <img src="asset/leaflet/images/nw_menceh.jpeg">`),
  // Tambahkan Kornat jika lebih dari 1
];
var toko = [
  L.marker([-8.733277755268098, 116.52534600380635], { icon: iconToko })
    .addTo(tokoCluster)
    .bindPopup(` <img src="asset/leaflet/images/kios_tani.jpg">`),
  L.marker([-8.736023344918678, 116.53456755414689], { icon: iconToko })
    .addTo(tokoCluster)
    .bindPopup(` <img src="asset/leaflet/images/kios_datuk.jpg">`),
];

var streets = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  id: "mapbox.streets",
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});
var satelit = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    id: "mapbox.streets",
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  }
);

const map = L.map("map", {
  center: [-8.634173884984019, 116.24921668372933],
  zoom: 13,
  layers: [satelit, sekolahCluster, masjidCluster, tokoCluster],
});
//=======================================================

//=================== Cluster ===========================
map.addLayer(sekolahCluster);
map.addLayer(masjidCluster);
map.addLayer(tokoCluster);
//=======================================================

const baseLayers = {
  streets: streets,
  satelit: satelit,
};

const overlays = {
  sekolah: sekolahCluster,
  masjid: masjidCluster,
  toko: tokoCluster,
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);

//  Menampilkan geojSON
L.geoJSON(gis).addTo(map);
