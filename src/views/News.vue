<template>
  <!-- 整页背景 -->
  <div class="min-h-screen bg-[#f5f7fa] py-10">
    <NavBar />

    <div class="max-w-6xl mx-auto px-4 pt-28">
      <h1 class="text-3xl font-bold text-blue-700 mb-6">FurCity 活动资讯中心</h1>
      <p class="text-gray-600 mb-8 text-sm">在这里查看展会更新、策划日志与官方发布，获取第一手的活动消息！</p>

      <div class="space-y-6">
        <div
          v-for="(item, index) in newsList"
          :key="index"
          class="bg-white p-6 rounded-xl shadow hover:shadow-lg border border-gray-100 hover:border-blue-200 transition-all"
        >
          <h2 class="text-xl font-semibold text-gray-800 mb-2">📰 {{ item.title }}</h2>
          <p class="text-sm text-gray-400 mb-2">发布日期：{{ item.date }}</p>
          <p class="text-gray-700 leading-relaxed">{{ item.summary }}</p>
        </div>
      </div>

      <div v-if="!newsList.length" class="text-center text-gray-400 mt-20">
        暂无资讯发布，敬请期待后续内容更新。
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'

const newsList = [
  {
    title: 'FC121 报名启动！',
    date: '2025-05-01',
    summary: 'FC121正式开放报名，申请中心同步上线，欢迎大家踊跃参与！'
  },
  {
    title: '场地与交通指引更新',
    date: '2025-04-25',
    summary: '我们更新了最新展会场地信息及周边交通、酒店建议，详情请点击导航地图。'
  },
  {
    title: '官方周边设计征集中！',
    date: '2025-04-15',
    summary: '你希望哪些元素成为周边？投稿即有机会参与现场展示，敬请关注！'
  }
]
</script>

<style scoped>
</style>