<template>
    <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div class="text-2xl font-bold text-blue-800">FurCity</div>
        <ul class="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li><router-link to="/" class="hover:text-blue-600">首页</router-link></li>
          <li><router-link to="/news" class="hover:text-blue-600">活动资讯</router-link></li>
          <li><router-link to="/archive" class="hover:text-blue-600">毛城档案</router-link></li>
          <li><router-link to="/apply" class="hover:text-blue-600">申请中心</router-link></li>
          <li><router-link to="/visitor" class="hover:text-blue-600">游客服务</router-link></li>
          <li><router-link to="/arms" class="hover:text-blue-600">ARMS入口</router-link></li>
          <li><router-link to="/fcs" class="hover:text-blue-600">关于FCS</router-link></li>
          <li><router-link to="/about" class="hover:text-blue-600">关于我们</router-link></li>
        </ul>
        <router-link
          to="/login"
          class="ml-4 text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          登录
        </router-link>
      </nav>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .router-link-active {
  color: #2563eb;
  font-weight: 600;
}
  </style>
  