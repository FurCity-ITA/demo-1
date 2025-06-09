<template>
  <div class="min-h-screen bg-[#f5f7fa] pb-16">
    <NavBar />

    <div class="max-w-5xl mx-auto pt-28 px-4">
      <!-- Title -->
      <header class="mb-6 text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">
          {{ $t('ticket.center') }}
        </h1>
        <p class="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          {{ $t('ticket.tagline') }}
        </p>
      </header>

      <!-- Ticket types -->
      <SectionBlock icon="🎫" :title="$t('ticket.types.title')">
        <ul class="list-disc pl-6 space-y-1">
          <li v-for="(item, idx) in $tm('ticket.types.list')" :key="idx">{{ item }}</li>
        </ul>
      </SectionBlock>

      <!-- Purchase -->
      <SectionBlock icon="🛍" :title="$t('ticket.purchase.title')">
        <p>{{ $t('ticket.purchase.content') }}</p>
        <div class="mt-4 flex justify-center">
          <a
            href="#"
            class="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h18M16 8l4 4-4 4M4 8h7a2 2 0 012 2v4"
              />
            </svg>
            {{ $t('ticket.purchase.button') }}
          </a>
        </div>
      </SectionBlock>

      <!-- Notice -->
      <SectionBlock icon="⚠️" :title="$t('ticket.notice.title')">
        <ul class="list-disc pl-6 space-y-1">
          <li v-for="(note, idx) in $tm('ticket.notice.list')" :key="idx">{{ note }}</li>
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