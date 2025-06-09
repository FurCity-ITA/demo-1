<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <nav
      class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-8"
    >
      <!-- Logo -->
      <router-link
        to="/"
        class="text-2xl font-extrabold tracking-tight text-blue-800"
      >
        FurCity
      </router-link>

      <!-- Desktop Navigation (≥ md) -->
      <ul
        class="hidden md:flex gap-6 text-sm font-medium text-gray-700"
        aria-label="Primary navigation"
      >
        <li v-for="item in navItems" :key="item.path">
          <router-link
            :to="item.path"
            class="hover:text-blue-600 transition"
            active-class="text-blue-600 font-semibold"
            exact
          >
            {{ $t(item.label) }}
          </router-link>
        </li>
      </ul>

      <!-- Language switch + login (≥ md) -->
      <div class="hidden md:flex items-center gap-3">
        <button
          v-for="lang in langs"
          :key="lang.code"
          @click="setLang(lang.code)"
          :class="[
            'text-xs transition',
            currentLang === lang.code ? 'font-semibold underline' : 'hover:underline'
          ]"
          aria-label="Switch language"
        >
          {{ lang.label }}
        </button>
        <router-link
          to="/login"
          class="ml-2 text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {{ $t('nav.login') }}
        </router-link>
      </div>

      <!-- Mobile hamburger button (< md) -->
      <button
        @click="toggleMenu"
        class="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle navigation menu"
      >
        <svg
          v-if="!open"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 6h18M3 12h18M3 18h18" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile slide-down panel -->
    <transition name="fade">
      <div v-if="open" class="md:hidden bg-white shadow-inner border-t">
        <ul class="flex flex-col gap-4 px-6 py-4 text-gray-700 text-base font-medium">
          <li v-for="item in navItems" :key="item.path" @click="closeMenu()">
            <router-link :to="item.path" class="block w-full hover:text-blue-600">
              {{ $t(item.label) }}
            </router-link>
          </li>
        </ul>
        <div class="flex justify-between items-center px-6 pb-4 border-t pt-4">
          <div class="flex gap-3">
            <button
              v-for="lang in langs"
              :key="lang.code"
              @click="setLang(lang.code)"
              :class="[
                'text-xs',
                currentLang === lang.code ? 'font-semibold underline' : 'hover:underline'
              ]"
            >
              {{ lang.label }}
            </button>
          </div>
          <router-link
            to="/login"
            class="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            @click="closeMenu()"
          >
            {{ $t('nav.login') }}
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// State ---------------------------------------------------
const open = ref(false);
const navItems = [
  { path: '/', label: 'nav.home' },
  { path: '/news', label: 'nav.news' },
  { path: '/archive', label: 'nav.archive' },
  { path: '/apply', label: 'nav.apply' },
  { path: '/visitor', label: 'nav.visitor' },
  { path: '/arms', label: 'nav.arms' },
  { path: '/fcs', label: 'nav.fcs' },
  { path: '/about', label: 'nav.about' }
];

const langs = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'EN' }
];

const toggleMenu = () => (open.value = !open.value);
const closeMenu = () => (open.value = false);

const setLang = (code) => {
  locale.value = code;
  localStorage.setItem('fc-lang', code);
};

const currentLang = computed(() => locale.value);

// Persist user language preference -----------------------
onMounted(() => {
  const saved = localStorage.getItem('fc-lang');
  if (saved && saved !== locale.value) {
    locale.value = saved;
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
