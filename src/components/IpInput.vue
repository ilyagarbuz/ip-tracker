<template>
  <form class="flex max-w-[556px] mx-auto mb-6 md:mb-10">
    <input
      id="ip-input"
      class="w-full py-4 px-6 rounded-l-2xl text-lg outline-none border-0"
      type="text"
      name="ip-input"
      placeholder="Search for any IP address or domain"
    />
    <button type="submit" class="bg-gray-800 hover:bg-gray-700 py-5 px-7 rounded-r-2xl">
      <icon-arrow />
    </button>
  </form>
</template>

<script setup>
import IconArrow from "./icons/IconArrow.vue"
</script>
