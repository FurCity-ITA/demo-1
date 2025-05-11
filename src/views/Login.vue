<template>
    <div class="fixed inset-0 flex items-center justify-center bg-[#f5f7fa] px-4">
      <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 class="text-2xl font-bold text-center text-blue-700 mb-6">登录 FurCity</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700 mb-1">用户名</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
  
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">密码</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
  
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            登录
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const username = ref('')
  const password = ref('')
  
  function handleLogin() {
    if (username.value && password.value) {
      alert(`登录成功！欢迎：${username.value}`)
      // 这里可以添加实际的身份验证逻辑或路由跳转
    } else {
      alert('请输入用户名和密码')
    }
  }
  </script>
  
  <style scoped>
  </style>
  