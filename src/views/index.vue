<template>
  <div class="homepage w-full min-h-screen bg-blue-50 text-gray-800">
    <!-- 顶部导航栏 -->
    <NavBar />

    <!-- 顶部轮播图区域 -->
    <section class="pt-28 px-4">
      <div class="relative w-full bg-white rounded-xl overflow-hidden shadow-lg">
        <Carousel :images="bannerImages" />
        <div class="absolute bottom-6 left-6 bg-white/80 backdrop-blur px-6 py-3 rounded shadow text-blue-800">
          欢迎访问 FurCity 官方平台！报名、申请、查阅一站式平台服务已开放。
        </div>
      </div>
    </section>

    <!-- 城市功能模块 -->
    <section class="py-16 px-4">
      <div class="w-full bg-white rounded-xl shadow-lg py-10 px-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">城市功能与服务</h2>
        <el-row :gutter="20" justify="center">
          <el-col :xs="12" :sm="8" :md="6" v-for="(item, index) in features" :key="index">
            <FeatureBox :icon="item.icon" :title="item.title" :subtitle="item.subtitle" :to="item.to" />
          </el-col>
        </el-row>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="bg-blue-900 text-white py-10 px-6 w-full">
      <div class="flex justify-center">
        <div class="max-w-md">
          <h1 class="font-bold text-lg mb-2 text-center">社交媒体</h1>
          <ul class="space-y-1 text-sm text-center">
            <li><a href="#" class="hover:underline">微博：@FurCity官方</a></li>
            <li><a href="#" class="hover:underline">Bilibili：FurCity 频道</a></li>
            <li><a href="#" class="hover:underline">Twitter：@furcity_online</a></li>
            <li><a href="#" class="hover:underline">Instagram：@furcityverse</a></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 底部信息 -->
    <footer class="bg-blue-950 text-center py-4 text-sm text-white w-full">
      <p>© 2025 FurCity Online. All Rights Reserved.</p>
      <p class="mt-1">本站为 FurCity 线下展会的官方信息平台。</p>
    </footer>
  </div>
</template>

<script setup>
import Carousel from '@/components/Carousel.vue'
import FeatureBox from '@/components/FeatureBox.vue'
import NavBar from '@/components/NavBar.vue'

const bannerImages = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
  '/images/banner3.jpg'
]

const features = [
  { icon: "📄", title: "通行许可", to: "/ticket", subtitle: "获取展会门票与入场资格" },
  { icon: "📝", title: "申请中心", to: "/apply", subtitle: "报名Staff、摊主、演出等" },
  { icon: "📢", title: "最新资讯", to: "/news", subtitle: "查看展会通知与更新动态" },
  { icon: "🗺️", title: "展会地图与交通", to: "/map", subtitle: "了解交通与周边信息" },
  { icon: "📚", title: "世界观百科", to: "/lore", subtitle: "探索毛城设定与主线剧情" },
  { icon: "🎥", title: "记忆回放", to: "/media", subtitle: "查看往届照片与视频资料" },
  { icon: "📊", title: "数据展示", to: "/stats", subtitle: "统计数据与历届成就" },
  { icon: "🧩", title: "A.R.M.S", to: "/arms", subtitle: "Staff 内部调度平台" }
]
</script>
