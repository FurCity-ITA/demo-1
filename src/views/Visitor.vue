<template>
  <div class="min-h-screen bg-[#f5f7fa] pb-16">
    <NavBar />

    <div class="max-w-6xl mx-auto pt-28 px-4">
      <!-- Title -->
      <header class="mb-6 text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">
          {{ $t('visitor.center') }}
        </h1>
        <p class="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          {{ $t('visitor.tagline') }}
        </p>
      </header>

      <!-- Sections -->
      <SectionBlock icon="🚪" :title="$t('visitor.entrance.title')">
        <p class="leading-relaxed">
          {{ $t('visitor.entrance.content') }}
        </p>
      </SectionBlock>

      <SectionBlock icon="🧭" :title="$t('visitor.transport.title')">
        <ul class="list-disc pl-6 space-y-1">
          <li v-for="(tip, idx) in $tm('visitor.transport.tips')" :key="idx">
            {{ tip }}
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock icon="💡" :title="$t('visitor.services.title')">
        <ul class="list-disc pl-6 space-y-1">
          <li v-for="(srv, idx) in $tm('visitor.services.items')" :key="idx">
            {{ srv }}
          </li>
        </ul>
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
