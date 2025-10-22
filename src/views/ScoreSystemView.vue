<template>
  <div class="page fade-in">
    <h1 class="text-gradient">🏆 积分系统</h1>
    <p>查看你的冒险成绩与奖励记录</p>

    <div class="score-list">
      <ScoreItem
        v-for="(record, index) in scoreRecords"
        :key="index"
        :record="record"
      />
    </div>

    <router-link to="/" class="btn-back">⬅ 返回首页</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ScoreItem from './ScoreItem.vue'

const scoreRecords = ref([
  { title: '完成图书馆任务', description: '找到第一条线索', points: 100 },
  { title: '破解神庙机关', description: '解锁古代之门', points: 100 },
  { title: '收集海底水晶', description: '发现宝石', points: 150 },
  { title: '与智者交易/解密', description: '挑战成功', points: 200 },
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
.score-list {
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
