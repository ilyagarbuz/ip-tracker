<template>
  <ul
    class="max-w-[1110px] mx-auto bg-white rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 md:py-10 px-6 gap-7 lg:gap-0"
  >
    <li class="px-6 text-center lg:border-r border-gray-300 last:border-none">
      <div class="text-gray-400 text-[10px] font-bold tracking-[0.15em] mb-1 md:mb-2 md:text-sm">
        IP ADDRESS
      </div>
      <div class="font-medium text-xl md:text-2xl">
        <span v-if="ipData">{{ ipData.ip }}</span>
        <span v-else>Loading...</span>
      </div>
    </li>
    <li class="px-6 text-center lg:border-r border-gray-300 last:border-none">
      <div class="text-gray-400 text-[10px] font-bold tracking-[0.15em] mb-1 md:mb-2 md:text-sm">
        LOCATION
      </div>
      <div class="font-medium text-xl md:text-2xl">
        <span v-if="ipData">{{ ipData.country_name }}, {{ ipData.city }}</span>
        <span v-else>Loading...</span>
      </div>
    </li>
    <li class="px-6 text-center lg:border-r border-gray-300 last:border-none">
      <div class="text-gray-400 text-[10px] font-bold tracking-[0.15em] mb-1 md:mb-2 md:text-sm">
        TIMEZONE
      </div>
      <div class="font-medium text-xl md:text-2xl">
        <span v-if="ipData">{{ ipData.time_zone.current_time }}</span>
        <span v-else>Loading...</span>
      </div>
    </li>
    <li class="px-6 text-center lg:border-r border-gray-300 last:border-none">
      <div class="text-gray-400 text-[10px] font-bold tracking-[0.15em] mb-1 md:mb-2 md:text-sm">
        ISP
      </div>
      <div class="font-medium text-xl md:text-2xl">
        <span v-if="ipData">{{ ipData.isp }}</span>
        <span v-else>Loading...</span>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  ipData: {
    type: Object,
    default() {
      return null
    }
  }
})
</script>
