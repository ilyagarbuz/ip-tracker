<script setup>
import { ref, onMounted } from "vue"
import { fetchIpData } from "./api"
import { initMap } from "./map"
import ipInput from "./components/IpInput.vue"
import ipInfo from "./components/IpInfo.vue"

import "leaflet/dist/leaflet.css"

const ipData = ref(null)
const getData = async () => {
  try {
    ipData.value = await fetchIpData()
  } catch (error) {
    console.log(error)
  }
}

const map = ref(null)
onMounted(async () => {
  await getData()
  initMap(map, ipData.value.latitude, ipData.value.longitude)
})
</script>

<template>
  <div class="container h-screen overflow-hidden">
    <div class="relative z-50 bg-pattern w-full h-[300px] pt-8 px-6 pointer-events-auto">
      <h1 class="text-[28px] text-center font-medium text-white mb-6">IP Address Tracker</h1>
      <ip-input />
      <ip-info :ip-data="ipData" />
    </div>
    <div id="map" class="relative -z-10 w-full h-full pointer-events-auto" />
  </div>
</template>
