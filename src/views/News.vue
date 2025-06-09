<template>
  <div class="min-h-screen bg-[#f5f7fa]">
    <!-- 封面 & 导航 -->
    <NavBar />

    <div class="max-w-6xl mx-auto px-4 pt-28 pb-16">
      <!-- Title & subtitle -->
      <header class="mb-8 text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">
          {{ $t('news.center') }}
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          {{ $t('news.tagline') }}
        </p>
      </header>

      <!-- Filter bar -->
      <div class="flex flex-wrap gap-2 justify-center mb-8">
        <button
          v-for="cat in categories"
          :key="cat.key"
          @click="activeCat = cat.key"
          class="px-4 py-1.5 rounded-full text-sm md:text-base transition border"
          :class="
            activeCat === cat.key
              ? 'bg-blue-600 text-white border-blue-600 shadow'
              : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
          "
        >
          {{ $t(cat.label) }}
        </button>

        <div class="relative ml-4 mt-2 md:mt-0">
          <input
            v-model="keyword"
            type="text"
            class="search-input"
            :placeholder="$t('news.searchPlaceholder')"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
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
      </div>

      <!-- News list -->
      <div class="space-y-6">
        <article
          v-for="(item, index) in filteredNews"
          :key="index"
          class="bg-white p-6 rounded-xl shadow hover:shadow-lg border border-gray-100 hover:border-blue-200 transition-all group"
        >
          <header class="flex items-center justify-between mb-2">
            <h2 class="text-xl font-semibold text-gray-800 flex items-center gap-1">
              <span>📰</span>{{ item.title }}
            </h2>
            <time class="text-sm text-gray-400" :datetime="item.date">
              {{ formatDate(item.date) }}
            </time>
          </header>
          <p class="text-gray-700 leading-relaxed line-clamp-3 mb-4">
            {{ item.summary }}
          </p>
          <router-link
            :to="`/news/${item.id || index}`"
            class="inline-flex items-center text-blue-600 text-sm font-medium hover:underline"
          >
            {{ $t('news.readMore') }} →
          </router-link>
        </article>
      </div>

      <!-- Empty state -->
      <p v-if="!filteredNews.length" class="text-center text-gray-400 mt-20">
        {{ $t('news.empty') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import NavBar from '@/components/NavBar.vue';

useI18n();

// --- mock data (will later fetch from API) ----------------
const newsList = [
  {
    id: 1,
    title: 'FC121 报名启动！',
    date: '2025-05-01',
    summary: 'FC121正式开放报名，申请中心同步上线，欢迎大家踊跃参与！',
    category: 'notice'
  },
  {
    id: 2,
    title: '场地与交通指引更新',
    date: '2025-04-25',
    summary:
      '我们更新了最新展会场地信息及周边交通、酒店建议，详情请点击导航地图。',
    category: 'notice'
  },
  {
    id: 3,
    title: '官方周边设计征集中！',
    date: '2025-04-15',
    summary: '你希望哪些元素成为周边？投稿即有机会参与现场展示，敬请关注！',
    category: 'preview'
  }
];

// --- categories & filters --------------------------------
const categories = [
  { key: 'all', label: 'news.cat.all' },
  { key: 'notice', label: 'news.cat.notice' },
  { key: 'devlog', label: 'news.cat.devlog' },
  { key: 'preview', label: 'news.cat.preview' },
  { key: 'partner', label: 'news.cat.partner' }
];

const activeCat = ref('all');
const keyword = ref('');

const filteredNews = computed(() => {
  return newsList.filter((n) => {
    const matchCat = activeCat.value === 'all' || n.category === activeCat.value;
    const matchKey = keyword.value
      ? (n.title + n.summary).toLowerCase().includes(keyword.value.toLowerCase())
      : true;
    return matchCat && matchKey;
  });
});

// --- helpers ---------------------------------------------
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
</script>

<style scoped>
.search-input {
  @apply w-52 md:w-64 px-3 py-2 pr-8 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition;
}
/* line-clamp for summary */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>