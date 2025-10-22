<template>
  <div class="page fade-in">
    <h1 class="text-gradient">🎯 任务挑战</h1>
    <p>完成挑战任务，获取积分和奖励！</p>

    <div class="task-list">
      <TaskCard
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
      />
    </div>

    <router-link to="/" class="btn-back">⬅ 返回首页</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TaskCard from './TaskCard.vue'

const tasks = ref([
  { icon: '🔍', title: '寻找线索', description: '在图书馆中发现藏宝图。' },
  { icon: '⚙️', title: '破解机关', description: '解锁神庙的古代机关。' },
  { icon: '💎', title: '收集水晶', description: '从洞穴中收集发光水晶。' },
  { icon: '🧩', title: '智者挑战', description: '达成交易、解谜成功' }
])
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: radial-gradient(circle at center, #0f172a, #020617);
  padding: 2rem;
  color: white;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
p {
  color: #93c5fd;
  margin-bottom: 2rem;
  font-size: 1.2rem;
}
.task-list {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
.btn-back {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}
.btn-back:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}
.text-gradient {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fade-in {
  animation: fadeIn 0.6s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
