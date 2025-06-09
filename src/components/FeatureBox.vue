<template>
  <router-link
    :to="to"
    class="group block w-full h-full p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-500 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <div class="flex items-center gap-4">
      <!-- Icon circle -->
      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-2xl group-hover:bg-blue-100 transition"
      >
        {{ icon }}
      </div>

      <!-- Text -->
      <div class="flex flex-col">
        <span
          class="text-base font-semibold text-gray-800 group-hover:text-blue-700"
        >
          {{ title }}
        </span>
        <span v-if="subtitle" class="text-sm text-gray-500">
          {{ subtitle }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  icon: { type: String, default: '' },
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  to: { type: String, default: '' }
});
</script>

<style scoped></style>