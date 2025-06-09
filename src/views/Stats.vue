<template>
  <div class="min-h-screen bg-[#f5f7fa] pb-16">
    <NavBar />

    <div class="max-w-6xl mx-auto pt-28 px-4">
      <header class="mb-6 text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">
          {{ $t('stats.center') }}
        </h1>
        <p class="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          {{ $t('stats.tagline') }}
        </p>
      </header>

      <!-- Overview counters -->
      <section class="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div
          v-for="(box, idx) in overview"
          :key="idx"
          class="bg-white rounded-xl p-6 shadow text-center"
        >
          <h2 class="text-2xl font-bold text-blue-700">{{ box.value }}</h2>
          <p class="text-gray-600 text-sm mt-1">{{ $t(box.label) }}</p>
        </div>
      </section>

      <!-- Achievements -->
      <SectionBlock icon="🎖" :title="$t('stats.achieve.title')">
        <ul class="list-disc pl-6 space-y-1">
          <li v-for="(ach, idx) in $tm('stats.achieve.list')" :key="idx">{{ ach }}</li>
        </ul>
      </SectionBlock>

      <!-- Trend chart placeholder -->
      <SectionBlock icon="📈" :title="$t('stats.trend.title')">
        <div class="h-72 flex items-center justify-center text-gray-500 bg-gray-100 rounded-lg">
          {{ $t('stats.trend.placeholder') }}
        </div>
      </SectionBlock>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import SectionBlock from '@/components/SectionBlock.vue';
import { useI18n } from 'vue-i18n';
useI18n();

const overview = [
  { value: 6, label: 'stats.overview.events' },
  { value: 8421, label: 'stats.overview.visits' },
  { value: 317, label: 'stats.overview.vendors' },
  { value: '78%', label: 'stats.overview.satisfaction' }
];
</script>

<style scoped></style>
