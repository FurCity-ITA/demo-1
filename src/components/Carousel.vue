<template>
  <div class="relative w-full h-[240px] md:h-[360px] lg:h-[480px] overflow-hidden rounded-xl">
    <img
      :src="images[current]"
      alt="轮播图"
      class="w-full h-full object-cover transition duration-700 ease-in-out"
    />
    <button
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 text-gray-700 px-2 py-1 rounded hover:bg-white"
      @click="prev"
    >‹</button>
    <button
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 text-gray-700 px-2 py-1 rounded hover:bg-white"
      @click="next"
    >›</button>
    <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
      <span
        v-for="(img, index) in images"
        :key="index"
        class="w-2.5 h-2.5 rounded-full"
        :class="current === index ? 'bg-white' : 'bg-white/40'"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: Array
})

const current = ref(0)
let intervalId = null

function next() {
  current.value = (current.value + 1) % props.images.length
}

function prev() {
  current.value = (current.value - 1 + props.images.length) % props.images.length
}

onMounted(() => {
  intervalId = setInterval(next, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
</style>