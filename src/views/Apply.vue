<template>
  <div class="min-h-screen bg-[#f5f7fa] pb-16">
    <NavBar />

    <div class="max-w-6xl mx-auto pt-28 px-4">
      <!-- Title -->
      <header class="mb-6 text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">
          {{ $t('apply.center') }}
        </h1>
        <p class="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          {{ $t('apply.tagline') }}
        </p>
      </header>

      <!-- Search bar -->
      <div class="flex justify-center mb-8">
        <input
          v-model="keyword"
          type="text"
          class="w-64 md:w-80 px-3 py-2 pr-8 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition search-input"
          :placeholder="$t('apply.searchPlaceholder')"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="-ml-8 h-4 w-4 self-center text-gray-400 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
          />
        </svg>
      </div>

      <!-- Card grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ApplyCard
          v-for="(item, idx) in filteredCards"
          :key="idx"
          :icon="item.icon"
          :title="$t(item.title)"
          :desc="$t(item.desc)"
          :to="item.to"
        />
      </div>

      <!-- Empty -->
      <p v-if="!filteredCards.length" class="text-center text-gray-400 mt-20">
        {{ $t('apply.empty') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import NavBar from '@/components/NavBar.vue';
import ApplyCard from '@/components/ApplyCard.vue';

useI18n();

// Card definitions ---------------------------------------
const cards = [
  { icon: '📥', title: 'apply.cards.staff', desc: 'apply.cards.staffDesc', to: '/apply/staff' },
  { icon: '🏪', title: 'apply.cards.vendor', desc: 'apply.cards.vendorDesc', to: '/apply/vendor' },
  { icon: '✒', title: 'apply.cards.artist', desc: 'apply.cards.artistDesc', to: '/apply/artist' },
  { icon: '🎭', title: 'apply.cards.stage', desc: 'apply.cards.stageDesc', to: '/apply/stage' },
  { icon: '🧸', title: 'apply.cards.photo', desc: 'apply.cards.photoDesc', to: '/apply/photo' },
  { icon: '🎧', title: 'apply.cards.music', desc: 'apply.cards.musicDesc', to: '/apply/music' },
  { icon: '🏠', title: 'apply.cards.roommate', desc: 'apply.cards.roommateDesc', to: '/apply/roommate' },
  { icon: '🏢', title: 'apply.cards.floor', desc: 'apply.cards.floorDesc', to: '/apply/floor' },
  { icon: '🐾', title: 'apply.cards.sponsor', desc: 'apply.cards.sponsorDesc', to: '/apply/sponsor' },
  { icon: '👨‍👧‍👦', title: 'apply.cards.guardian', desc: 'apply.cards.guardianDesc', to: '/apply/guardian' }
];

// Search --------------------------------------------------
const keyword = ref('');
const filteredCards = computed(() => {
  if (!keyword.value) return cards;
  return cards.filter((c) =>
    $t(c.title).toLowerCase().includes(keyword.value.toLowerCase()) ||
    $t(c.desc).toLowerCase().includes(keyword.value.toLowerCase())
  );
});
</script>

<style scoped>
.search-input::-webkit-search-cancel-button {
  display: none;
}
</style>
