<template>
  <div class="min-h-screen bg-[#f5f7fa] px-4 pb-16">
    <NavBar />
    <div class="max-w-6xl mx-auto pt-28">
      <h1 class="text-3xl font-bold text-blue-700 mb-4">F.A.I.R 申请中心</h1>
      <p class="text-gray-600 mb-8 text-sm">
        欢迎使用 <strong>毛茸城申请与综合注册系统</strong> <span class="text-blue-600 font-semibold">F.A.I.R - FurCity Application & Integration Registry</span>。
        请根据你的申请类型选择对应项目，所有申请将在提交后生成 <strong>申请编号</strong>，可用于后续进度查询。
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ApplyCard title="FCStaff 申请" icon="📥" desc="部门意向、履历填写、系统绑定" to="/apply/staff" />
        <ApplyCard title="展商申请" icon="🏪" desc="摊位信息、主理人资料、营业内容" to="/apply/vendor" />
        <ApplyCard title="签绘画师申请" icon="✒" desc="作品审核与展示内容登记" to="/apply/artist" />
        <ApplyCard title="舞台演出申请" icon="🎭" desc="舞台预约、设备与时间档申请" to="/apply/stage" />
        <ApplyCard title="合影协助申请" icon="🧸" desc="团体照、同好照登记与安排" to="/apply/photo" />
        <ApplyCard title="随舞歌单征集" icon="🎧" desc="现场跳舞区使用曲目投稿" to="/apply/music" />
        <ApplyCard title="同住人信息登记" icon="🏠" desc="住宿伙伴信息同步登记" to="/apply/roommate" />
        <ApplyCard title="同层入住申请" icon="🏢" desc="希望与特定团队安排同层" to="/apply/floor" />
        <ApplyCard title="赞助者信息登记" icon="🐾" desc="品牌/资源支持意向登记" to="/apply/sponsor" />
        <ApplyCard title="监护人知情书下载" icon="👨‍👧‍👦" desc="适用于未成年参展者" to="/apply/guardian" />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import ApplyCard from '@/components/ApplyCard.vue'
</script>

<style scoped>
</style>
