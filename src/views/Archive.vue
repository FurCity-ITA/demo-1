<template>
  <div class="min-h-screen bg-[#f5f7fa] pb-16">
    <NavBar />

    <div class="max-w-6xl mx-auto pt-28 px-4">
      <h1 class="text-3xl font-bold text-blue-700 mb-4">毛城档案</h1>
      <p class="text-gray-600 mb-8 text-sm">探索 FurCity 的世界设定、城市地图与角色背景，进入毛茸宇宙的核心。</p>

      <div class="space-y-10">
        <!-- 城市设定 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">🌇 毛茸城设定</h2>
          <p class="text-gray-700 leading-relaxed bg-white p-4 rounded-lg shadow">

          </p>
        </section>

        <!-- 区域划分与地标 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">🗺️ 区域划分与重要地标</h2>
          <ul class="list-disc pl-6 text-gray-700 bg-white p-4 rounded-lg shadow space-y-1">
          </ul>
        </section>

        <!-- 世界观故事 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">📖 世界观故事与历史事件</h2>
          <p class="text-gray-700 leading-relaxed bg-white p-4 rounded-lg shadow">
            
          </p>
        </section>

        <!-- 主要角色 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">🎭 主要角色介绍</h2>
          <ul class="list-disc pl-6 text-gray-700 bg-white p-4 rounded-lg shadow space-y-1">

          </ul>
        </section>

        <!-- 成就系统 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">🏆 成就系统设定（FEX）</h2>
          <p class="text-gray-700 leading-relaxed bg-white p-4 rounded-lg shadow">
            
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
</style>