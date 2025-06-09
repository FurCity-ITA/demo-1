<template>
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-1">
        <span class="text-2xl">{{ icon }}</span>
        {{ title }}
      </h2>
      <div class="text-gray-700 bg-white p-4 rounded-lg shadow">
        <slot />
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({
    icon: String,
    title: String
  });
  </script>
  