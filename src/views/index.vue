<template>
  <div class="homepage w-full min-h-screen bg-blue-50 text-gray-800 flex flex-col">
    <!-- 顶部导航栏 -->
    <NavBar />

    <!-- 顶部轮播图区域 -->
    <section class="pt-28 px-4">
      <div class="relative w-full bg-white rounded-xl overflow-hidden shadow-lg">
        <!-- 新版 Carousel，支持 slides + announcements -->
        <Carousel
          :slides="bannerSlides"
          :announcements="announcements"
          height="lg"
          :autoPlay="true"
          :interval="7000"
        />

        <!-- 底部欢迎横幅，可随时替换为 i18n 字符串 -->
        <div
          class="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-full bg-white/80 backdrop-blur px-6 py-3 rounded shadow text-blue-800 text-sm md:text-base"
        >
          {{ $t('home.welcome') }}
        </div>
      </div>
    </section>

    <!-- 城市功能模块 -->
    <section class="py-16 px-4">
      <div class="w-full bg-white rounded-xl shadow-lg py-10 px-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">
          {{ $t('home.features') }}
        </h2>
        <el-row :gutter="20" justify="center">
          <el-col
            :xs="12"
            :sm="8"
            :md="6"
            v-for="(item, index) in features"
            :key="index"
          >
            <FeatureBox
              :icon="item.icon"
              :title="$t(item.title)"
              :subtitle="$t(item.subtitle)"
              :to="item.to"
            />
          </el-col>
        </el-row>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="bg-blue-900 text-white py-10 px-6 w-full">
      <div class="flex justify-center">
        <div class="max-w-md text-center">
          <h1 class="font-bold text-lg mb-2">{{ $t('home.social') }}</h1>
          <ul class="space-y-1 text-sm">
            <li><a href="#" class="hover:underline">微博：@FurCity官方</a></li>
            <li><a href="#" class="hover:underline">Bilibili：FurCity 频道</a></li>
            <li><a href="#" class="hover:underline">Twitter：@furcity_online</a></li>
            <li><a href="#" class="hover:underline">Instagram：@furcityverse</a></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 底部信息 -->
    <footer class="bg-blue-950 text-center py-4 text-sm text-white w-full mt-auto">
      <p>© 2025 FurCity Online. All Rights Reserved.</p>
      <p class="mt-1">本站为 FurCity 线下展会的官方信息平台。</p>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import Carousel from '@/components/Carousel.vue';
import FeatureBox from '@/components/FeatureBox.vue';
import NavBar from '@/components/NavBar.vue';

useI18n();

// 顶部轮播 slides
const bannerSlides = [
  {
    src: '/images/banner1.jpg',
    title: 'banner.poster',
    subtitle: 'banner.sub1'
  },
  {
    src: '/images/banner2.jpg',
    title: 'banner.news',
    subtitle: 'banner.sub2'
  },
  {
    src: '/images/banner3.jpg',
    title: 'banner.countdown',
    countdown: '2025-08-15T10:00:00+08:00'
  }
];

// 公告跑马灯
const announcements = ['announce.ticket', 'announce.booth'];

// 城市功能模块
const features = [
  {
    icon: '🛂',
    title: 'feature.pass',
    subtitle: 'feature.passDesc',
    to: '/ticket'
  },
  {
    icon: '🗺️',
    title: 'feature.map',
    subtitle: 'feature.mapDesc',
    to: '/map'
  },
  {
    icon: '🎥',
    title: 'feature.media',
    subtitle: 'feature.mediaDesc',
    to: '/media'
  },
  {
    icon: '📊',
    title: 'feature.stats',
    subtitle: 'feature.statsDesc',
    to: '/stats'
  }
];
</script>

<style scoped></style>
