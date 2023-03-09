<script setup>
import IconArrow from '@/components/icons/IconArrow.vue'
</script>

<template>
  <div class="container">
    <div class="bg-pattern w-full h-[300px] pt-8 px-6">
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
      <ul class="max-w-[1110px] mx-auto bg-white rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 md:py-10 px-6 gap-7 lg:gap-0">
        <li class="px-6 text-center lg:border-r border-gray-300 last:border-none">
          <div class="text-gray-400 text-[10px] font-bold tracking-[0.15em] mb-1 md:mb-2 md:text-sm">IP ADDRESS</div>
          <div class="font-medium text-xl md:text-2xl">192.212.174.101</div>
        </li>
        <li class="px-6 text-center lg:border-r border-gray-300 last:border-none">
          <div class="text-gray-400 text-[10px] font-bold tracking-[0.15em] mb-1 md:mb-2 md:text-sm">LOCATION</div>
          <div class="font-medium text-xl md:text-2xl">Brooklyn, NY 10001</div>
        </li>
        <li class="px-6 text-center lg:border-r border-gray-300 last:border-none">
          <div class="text-gray-400 text-[10px] font-bold tracking-[0.15em] mb-1 md:mb-2 md:text-sm">TIMEZONE</div>
          <div class="font-medium text-xl md:text-2xl">UTC -05:00</div>
        </li>
        <li class="px-6 text-center lg:border-r border-gray-300 last:border-none">
          <div class="text-gray-400 text-[10px] font-bold tracking-[0.15em] mb-1 md:mb-2 md:text-sm">ISP</div>
          <div class="font-medium text-xl md:text-2xl">SpaceX Starlink</div>
        </li>
      </ul>
    </div>
  </div>
</template>



