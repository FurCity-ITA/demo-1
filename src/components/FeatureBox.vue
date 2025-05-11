<template>
  <router-link
    :to="to"
    class="w-full h-full block p-4 rounded-xl bg-white border border-gray-200 shadow hover:shadow-md transition hover:border-blue-500"
  >
    <div class="flex flex-col items-start gap-2">
      <div class="text-3xl">{{ icon }}</div>
      <div class="text-lg font-semibold text-gray-800">{{ title }}</div>
      <div v-if="subtitle" class="text-sm text-gray-500 leading-snug">{{ subtitle }}</div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  icon: String,
  title: String,
  subtitle: String,
  to: String
})
</script>

<style scoped>
</style>