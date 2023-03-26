<script setup>
import { ref, onMounted } from 'vue'
import L from 'leaflet'
import IconArrow from '@/components/icons/IconArrow.vue'

import 'leaflet/dist/leaflet.css'

const map = ref(null)
const ipData = ref(null)

onMounted(() => {
  // Init map

  map.value = L.map('map', { zoomControl: false }).setView([53.9067, 27.5818], 10)
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map.value)

  const myIcon = L.icon({
    iconUrl: '/images/icon-location.svg',

    iconSize: [27, 36] // size of the icon
  })

  L.marker([53.9067, 27.5818], { icon: myIcon }).addTo(map.value)

  // get ip

  fetch('https://api.ipgeolocation.io/ipgeo?apiKey=a2fe82f928e84f3096400fcb3dee816c')
    .then((response) => response.json())
    .then((data) => (ipData.value = data))
    .catch((error) => console.error(error))
})
</script>

<template>
  <div class="container h-screen overflow-hidden">
    <div class="relative z-50 bg-pattern w-full h-[300px] pt-8 px-6 pointer-events-auto">
      <!-- Header -->
      <h1 class="text-[28px] text-center font-medium text-white mb-6">IP Address Tracker</h1>

      <!-- Input -->
      <form class="flex max-w-[556px] mx-auto mb-6 md:mb-10">
        <input
          class="w-full py-4 px-6 rounded-l-2xl text-lg outline-none border-0"
          type="text"
          name="ip-input"
          placeholder="Search for any IP address or domain"
          id="ip-input"
        />
        <button type="submit" class="bg-gray-800 hover:bg-gray-700 py-5 px-7 rounded-r-2xl">
          <icon-arrow />
        </button>
      </form>

      <!-- Info -->
      <ul
        class="max-w-[1110px] mx-auto bg-white rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 md:py-10 px-6 gap-7 lg:gap-0"
      >
        <li class="px-6 text-center lg:border-r border-gray-300 last:border-none">
          <div
            class="text-gray-400 text-[10px] font-bold tracking-[0.15em] mb-1 md:mb-2 md:text-sm"
          >
            IP ADDRESS
          </div>
          <div class="font-medium text-xl md:text-2xl">
            <span v-if="ipData">{{ ipData.ip }}</span>
            <span v-else>Loading...</span>
          </div>
        </li>
        <li class="px-6 text-center lg:border-r border-gray-300 last:border-none">
          <div
            class="text-gray-400 text-[10px] font-bold tracking-[0.15em] mb-1 md:mb-2 md:text-sm"
          >
            LOCATION
          </div>
          <div class="font-medium text-xl md:text-2xl">
            <span v-if="ipData">{{ ipData.country_name }}, {{ ipData.city }}</span>
            <span v-else>Loading...</span>
          </div>
        </li>
        <li class="px-6 text-center lg:border-r border-gray-300 last:border-none">
          <div
            class="text-gray-400 text-[10px] font-bold tracking-[0.15em] mb-1 md:mb-2 md:text-sm"
          >
            TIMEZONE
          </div>
          <div class="font-medium text-xl md:text-2xl">
            <span v-if="ipData">{{ ipData.time_zone.current_time }}</span>
            <span v-else>Loading...</span>
          </div>
        </li>
        <li class="px-6 text-center lg:border-r border-gray-300 last:border-none">
          <div
            class="text-gray-400 text-[10px] font-bold tracking-[0.15em] mb-1 md:mb-2 md:text-sm"
          >
            ISP
          </div>
          <div class="font-medium text-xl md:text-2xl">
            <span v-if="ipData">{{ ipData.isp }}</span>
            <span v-else>Loading...</span>
          </div>
        </li>
      </ul>

      <!-- Map -->
    </div>
    <div id="map" class="relative -z-10 w-full h-full pointer-events-auto"></div>
  </div>
</template>



