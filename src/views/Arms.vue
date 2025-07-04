<template>
  <div class="min-h-screen bg-[#f5f7fa] pb-16 flex flex-col">
    <NavBar />

    <!-- Login Panel -->
    <div v-if="!isLoggedIn" class="flex-1 flex items-center justify-center px-4 pt-20 md:pt-28">
      <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 class="text-2xl font-bold text-blue-700 mb-4 text-center">
          {{ $t('arms.center') }}
        </h1>
        <p class="text-gray-600 text-sm mb-6 text-center">
          {{ $t('arms.tagline') }}
        </p>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              {{ $t('arms.username') }}
            </label>
            <input
              v-model="username"
              type="text"
              required
              class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              autocomplete="username"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              {{ $t('arms.password') }}
            </label>
            <div class="relative">
              <input
                v-model="password"
                :type="showPwd ? 'text' : 'password'"
                required
                class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                autocomplete="current-password"
              />
              <button
                type="button"
                @click="showPwd = !showPwd"
                class="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-600"
                :aria-label="showPwd ? 'hide' : 'show'"
              >
                <svg
                  v-if="showPwd"
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
                    d="M3 3l18 18M9.88 9.88a3 3 0 104.24 4.24m1.12-1.12a3 3 0 01-4.24-4.24"
                  />
                </svg>
                <svg
                  v-else
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-60"
            :disabled="loading"
          >
            <svg
              v-if="loading"
              class="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v3m6.364 1.636l-2.121 2.121M21 12h-3m-1.636 6.364l-2.121-2.121M12 21v-3m-6.364-1.636l2.121-2.121M3 12h3m1.636-6.364l2.121 2.121"
              />
            </svg>
            <span>{{ $t('arms.login') }}</span>
          </button>
        </form>

        <p v-if="error" class="text-red-500 text-sm text-center mt-4">{{ error }}</p>
      </div>
    </div>

    <!-- Dashboard -->
    <div v-else class="max-w-6xl mx-auto mt-20 px-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl md:text-2xl font-bold text-blue-700">
          {{ $t('arms.dashboard') }}
        </h2>
        <button
          @click="logout"
          class="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          {{ $t('arms.logout') }}
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ApplyCard
          v-for="(item, idx) in features"
          :key="idx"
          :icon="item.icon"
          :title="$t(item.title)"
          :desc="$t(item.desc)"
          :to="item.to"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import NavBar from '@/components/NavBar.vue';
import ApplyCard from '@/components/ApplyCard.vue';

useI18n();

// ---------------------------------------------------------
const username = ref('');
const password = ref('');
const showPwd = ref(false);
const loading = ref(false);
const isLoggedIn = ref(false);
const error = ref('');

// Persist login flag (demo) -------------------------------
watchEffect(() => {
  if (isLoggedIn.value) localStorage.setItem('arms-auth', '1');
  else localStorage.removeItem('arms-auth');
});

if (localStorage.getItem('arms-auth') === '1') isLoggedIn.value = true;

// Dummy login --------------------------------------------
async function handleLogin() {
  error.value = '';
  loading.value = true;
  await new Promise((r) => setTimeout(r, 800));
  loading.value = false;
  if (username.value === 'admin' && password.value === 'arms123') {
    isLoggedIn.value = true;
  } else {
    error.value = $t('arms.error');
  }
}

function logout() {
  isLoggedIn.value = false;
  username.value = '';
  password.value = '';
}

// Features list ------------------------------------------
const features = [
  { icon: '📊', title: 'arms.features.rmdcs', desc: 'arms.features.rmdcsDesc', to: 'https://doc.weixin.qq.com/doc/w3_Aa8A6AYIAHECNBCQdqgMrSne1bOWD?scode=AHkAFwexADQKTEC0DeAa8A6AYIAHE' },
  { icon: '📢', title: 'arms.features.fist', desc: 'arms.features.fistDesc' },
  { icon: '📈', title: 'arms.features.stream', desc: 'arms.features.streamDesc' },
  { icon: '📺', title: 'arms.features.screen', desc: 'arms.features.screenDesc' },
  { icon: '🎫', title: 'arms.features.ticket', desc: 'arms.features.ticketDesc' },
  { icon: '📦', title: 'arms.features.material', desc: 'arms.features.materialDesc' },
  { icon: '🚪', title: 'arms.features.entry', desc: 'arms.features.entryDesc' },
  { icon: '👥', title: 'arms.features.database', desc: 'arms.features.databaseDesc' },
  { icon: '📬', title: 'arms.features.mail', desc: 'arms.features.mailDesc' }
];
</script>

<style scoped>
.search-input::-webkit-search-cancel-button {
  display: none;
}
</style>