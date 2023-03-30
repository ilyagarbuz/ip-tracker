import L from "leaflet"

export const initMap = (map, latitude, longitude) => {
  map.value = L.map("map", { zoomControl: false }).setView([latitude, longitude], 10)
  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map.value)

  const myIcon = L.icon({
    iconUrl: "/images/icon-location.svg",

    iconSize: [27, 36] // size of the icon
  })

  L.marker([latitude, longitude], { icon: myIcon }).addTo(map.value)
}
