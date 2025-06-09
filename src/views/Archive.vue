<template>
  <div class="min-h-screen bg-[#f5f7fa]">
    <NavBar />

    <!-- Wrapper -->
    <div class="max-w-6xl mx-auto px-4 pt-28 pb-16">
      <!-- Title -->
      <header class="mb-8 text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">
          {{ $t('archive.center') }}
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          {{ $t('archive.tagline') }}
        </p>
      </header>

      <!-- Year Tabs -->
      <div
        class="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-blue-300"
      >
        <button
          v-for="y in years"
          :key="y"
          @click="activeYear = y"
          class="px-4 py-1.5 rounded-full text-sm md:text-base transition border"
          :class="
            activeYear === y
              ? 'bg-blue-600 text-white border-blue-600 shadow'
              : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
          "
        >
          {{ y }}
        </button>
      </div>

      <!-- Content for active year -->
      <section v-if="archive">
        <!-- Overview card -->
        <article
          class="bg-white p-6 mb-8 rounded-xl shadow hover:shadow-lg border border-gray-100 hover:border-blue-200 transition-all"
        >
          <header class="flex items-center gap-2 mb-3">
            <span class="text-2xl">📅</span>
            <h2 class="text-xl font-semibold text-gray-800">
              {{ $t('archive.section.overview') }}
            </h2>
          </header>
          <ul class="text-gray-700 text-sm md:text-base space-y-1 pl-4 list-disc">
            <li v-if="archive.time"><strong>{{ $t('archive.overview.time') }}:</strong> {{ archive.time }}</li>
            <li v-if="archive.location"><strong>{{ $t('archive.overview.location') }}:</strong> {{ archive.location }}</li>
            <li v-if="archive.guest"><strong>{{ $t('archive.overview.guest') }}:</strong> {{ archive.guest }}</li>
            <li v-if="archive.sponsor"><strong>{{ $t('archive.overview.sponsor') }}:</strong> {{ archive.sponsor }}</li>
            <li v-if="archive.partner"><strong>{{ $t('archive.overview.partner') }}:</strong> {{ archive.partner }}</li>
          </ul>
        </article>

        <!-- Achievements -->
        <article
          v-if="archive.achievements && archive.achievements.length"
          class="bg-white p-6 mb-8 rounded-xl shadow hover:shadow-lg border border-gray-100 hover:border-blue-200 transition-all"
        >
          <header class="flex items-center gap-2 mb-3">
            <span class="text-2xl">🏆</span>
            <h2 class="text-xl font-semibold text-gray-800">
              {{ $t('archive.section.achievements') }}
            </h2>
          </header>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 text-sm md:text-base">
            <li
              v-for="(ach, idx) in archive.achievements"
              :key="idx"
              class="bg-blue-50/70 rounded px-3 py-2 flex items-center gap-2"
            >
              <span class="text-blue-600">✔</span>
              <span>{{ ach }}</span>
            </li>
          </ul>
        </article>

        <!-- Gallery -->
        <article
          v-if="archive.gallery && archive.gallery.length"
          class="bg-white p-6 rounded-xl shadow hover:shadow-lg border border-gray-100 hover:border-blue-200 transition-all"
        >
          <header class="flex items-center gap-2 mb-3">
            <span class="text-2xl">🖼️</span>
            <h2 class="text-xl font-semibold text-gray-800">
              {{ $t('archive.section.gallery') }}
            </h2>
          </header>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <img
              v-for="(img, idx) in archive.gallery"
              :key="idx"
              :src="img"
              :alt="`gallery ${idx}`"
              class="aspect-[3/2] object-cover rounded-lg shadow-inner hover:scale-105 transition"
            />
          </div>
        </article>
      </section>

      <!-- Empty State -->
      <p v-else class="text-center text-gray-400 mt-20">
        {{ $t('archive.empty') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import NavBar from '@/components/NavBar.vue';

useI18n();

// ---------------- Mock archive data ----------------------
const archives = [
  {
    year: 2025,
    time: '2025-08-15 ~ 17',
    location: 'FurCity 会展中心',
    guest: 'John Doe, Jane Roe',
    sponsor: 'Paws Corp.',
    partner: 'Furry Media',
    achievements: ['访客突破 10,000 人', '首次引入 AR 导览', '慈善募款 5 万元'],
    gallery: ['/images/2025_1.jpg', '/images/2025_2.jpg', '/images/2025_3.jpg']
  },
  {
    year: 2024,
    time: '2024-08-10 ~ 12',
    location: 'FurCity 会展中心',
    guest: 'Alpha, Beta',
    sponsor: 'Tail Co.',
    partner: 'FurNews',
    achievements: ['新增夜间市集', '活动面积翻倍'],
    gallery: ['/images/2024_1.jpg', '/images/2024_2.jpg']
  },
  {
    year: 2023,
    achievements: ['首届 FurCity successfully held']
  }
];

// ---------------- State ----------------------------------
const years = archives.map((a) => a.year).sort((a, b) => b - a);
const activeYear = ref(years[0]);

const archive = computed(() => archives.find((a) => a.year === activeYear.value));
</script>

<style scoped>
/* custom scrollbar for year tabs */
.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: rgba(96, 165, 250, 0.4);
}
</style>
