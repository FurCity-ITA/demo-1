<template>
  <div class="min-h-screen bg-[#f5f7fa] pb-16">
    <NavBar />

    <div class="max-w-6xl mx-auto pt-28 px-4">
      <!-- Title -->
      <header class="mb-6 text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">
          {{ $t('about.center') }}
        </h1>
        <p class="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          {{ $t('about.tagline') }}
        </p>
      </header>

      <!-- Who we are -->
      <SectionBlock icon="🌟" :title="$t('about.who.title')">
        <p>{{ $t('about.who.content') }}</p>
      </SectionBlock>

      <!-- Contact -->
      <SectionBlock icon="📬" :title="$t('about.contact.title')">
        <ul class="list-disc pl-6 space-y-1">
          <li v-for="(mail, idx) in $tm('about.contact.list')" :key="idx">{{ mail }}</li>
        </ul>
      </SectionBlock>

      <!-- Story -->
      <SectionBlock icon="🎙" :title="$t('about.story.title')">
        <p>{{ $t('about.story.content') }}</p>
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
