<template>
    <div
      class="w-full h-full cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-500 transition"
      @click="navigate"
    >
      <div class="flex items-start gap-3">
        <div class="text-3xl">{{ icon }}</div>
        <div class="flex flex-col">
          <h3 class="text-lg font-semibold text-blue-800">{{ title }}</h3>
          <p class="text-sm text-gray-600 mt-1 leading-snug">{{ desc }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const props = defineProps({
    icon: String,
    title: String,
    desc: String,
    to: { type: String, default: '' }
  })
  
  const router = useRouter()
  
  const navigate = () => {
    if (props.to) {
      router.push(props.to)
    }
  }
  </script>
  
  <style scoped>
  </style>
  