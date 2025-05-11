<template>
    <div class="min-h-screen bg-[#f5f7fa] px-4 pb-16">
      <NavBar />
  
      <div class="max-w-md mx-auto pt-32 bg-white p-8 rounded-xl shadow">
        <h1 class="text-2xl font-bold text-blue-700 mb-4 text-center">A.R.M.S 系统登录</h1>
        <p class="text-gray-600 text-sm mb-6 text-center">此系统仅限 Staff 与授权人员访问，请输入账户信息。</p>
  
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">用户名</label>
            <input v-model="username" type="text" required class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">密码</label>
            <input v-model="password" type="password" required class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">登录</button>
        </form>
  
        <p v-if="error" class="text-red-500 text-sm text-center mt-4">{{ error }}</p>
      </div>
  
      <div v-if="isLoggedIn" class="max-w-6xl mx-auto mt-16">
        <h2 class="text-xl font-bold text-blue-700 mb-6">管理功能入口</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ApplyCard icon="📊" title="调度控制中心 (RMDCS)" desc="前往调度平台（需内部授权）" to="https://doc.weixin.qq.com/doc/w3_Aa8A6AYIAHECNBCQdqgMrSne1bOWD?scode=AHkAFwexADQKTEC0DeAa8A6AYIAHE" />
          <ApplyCard icon="📢" title="FIST 通知发布系统" desc="发布活动通知，控制通知流推送" />
          <ApplyCard icon="📈" title="实时任务流监控" desc="追踪现场调度流，查看状态" />
          <ApplyCard icon="📺" title="活动调度信息大屏" desc="同步大屏信息至主控台与移动端" />
          <ApplyCard icon="🎫" title="票务系统 / 护照管理" desc="扫码绑定、挂失管理、护照核验" />
          <ApplyCard icon="📦" title="物资核验系统" desc="核验物料、票务、护照绑定与发放" />
          <ApplyCard icon="🚪" title="入场管理系统" desc="通行证扫码验证与异常检测警告" />
          <ApplyCard icon="👥" title="游客与 Staff 资料库" desc="查验、实名信息补录、资料维护" />
          <ApplyCard icon="📬" title="官方邮箱平台" desc="媒体合作与部门邮件联系系统" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import NavBar from '@/components/NavBar.vue'
  import ApplyCard from '@/components/ApplyCard.vue'
  
  const username = ref('')
  const password = ref('')
  const isLoggedIn = ref(false)
  const error = ref('')
  
  function handleLogin() {
    if (username.value === 'admin' && password.value === 'arms123') {
      isLoggedIn.value = true
      error.value = ''
    } else {
      error.value = '用户名或密码错误，请重试'
    }
  }
  </script>
  
  <style scoped>
  </style>