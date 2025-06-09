<template>
  <div class="min-h-screen bg-[#f5f7fa] pb-16">
    <NavBar />

    <div class="max-w-6xl mx-auto pt-28 px-4">
      <header class="mb-6 text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">
          {{ $t('media.center') }}
        </h1>
        <p class="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          {{ $t('media.tagline') }}
        </p>
      </header>

      <!-- Gallery -->
      <SectionBlock icon="📸" :title="$t('media.photos.title')">
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img
            v-for="n in 6"
            :key="n"
            :src="`/images/gallery/photo${n}.jpg`"
            class="rounded-lg shadow hover:scale-105 transition duration-300 cursor-pointer"
            :alt="`photo ${n}`"
          />
        </div>
      </SectionBlock>

      <!-- Videos -->
      <SectionBlock icon="🎬" :title="$t('media.videos.title')">
        <div class="grid gap-4 sm:grid-cols-2">
          <div v-for="vid in videos" :key="vid" class="aspect-video">
            <iframe
              class="w-full h-full rounded"
              :src="`https://player.bilibili.com/player.html?bvid=${vid}`"
              frameborder="0"
              allowfullscreen
            />
          </div>
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

const videos = ['BV1xxxxxxx', 'BV2yyyyyyy'];
</script>

<style scoped></style>