<template>
  <div class="min-h-screen bg-[#f5f7fa] pb-16">
    <NavBar />

    <div class="max-w-6xl mx-auto pt-28 px-4">
      <!-- Title -->
      <header class="mb-6 text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">
          {{ $t('map.center') }}
        </h1>
        <p class="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          {{ $t('map.tagline') }}
        </p>
      </header>

      <!-- Venue -->
      <SectionBlock icon="📍" :title="$t('map.venue.title')">
        <p class="mb-4">{{ $t('map.venue.address') }}</p>
        <!-- Placeholder for map -->
        <div class="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
          {{ $t('map.venue.mapPlaceholder') }}
        </div>
      </SectionBlock>

      <!-- Public transport -->
      <SectionBlock icon="🚇" :title="$t('map.transport.title')">
        <ul class="list-disc pl-6 space-y-1">
          <li v-for="(tip, idx) in $tm('map.transport.list')" :key="idx">{{ tip }}</li>
        </ul>
      </SectionBlock>

      <!-- Hotels -->
      <SectionBlock icon="🏨" :title="$t('map.hotel.title')">
        <ul class="list-disc pl-6 space-y-1">
          <li v-for="(hotel, idx) in $tm('map.hotel.list')" :key="idx">{{ hotel }}</li>
        </ul>
      </SectionBlock>

      <!-- Shuttle -->
      <SectionBlock icon="🚌" :title="$t('map.shuttle.title')">
        <p>{{ $t('map.shuttle.content') }}</p>
      </SectionBlock>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import SectionBlock from '@/components/SectionBlock.vue';
import { useI18n } from 'vue-i18n';
useI18n();
</script>

<style scoped></style>
