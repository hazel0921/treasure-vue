<template>
  <div class="leaderboard-container fade-in">
    <header class="leaderboard-header">
      <h1 class="text-gradient">🏆 排行榜</h1>
      <p>看看谁是寻宝世界中的真正探险王！</p>
    </header>

    <main class="leaderboard-main">
      <div class="leaderboard-card">
        <!-- ✅ 使用子组件 -->
        <LeaderboardItem
          v-for="(player, index) in players"
          :key="index"
          :rank="index + 1"
          :player="player"
        />
      </div>

      <router-link to="/" class="btn btn-back">⬅ 返回首页</router-link>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LeaderboardItem from './LeaderboardItem.vue'  // ✅ 导入子组件

const players = ref([
  { name: '探险家A', score: 550, avatar: '🧭' },
  { name: '寻宝勇士B', score: 400, avatar: '⚔️' },
  { name: '冒险者C', score: 350, avatar: '🧙' },
  { name: '小狐狸D', score: 300, avatar: '🦊' },
])
</script>

<style scoped>
.leaderboard-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: radial-gradient(circle at center, #0f172a, #020617);
}

.leaderboard-header {
  text-align: center;
  margin-bottom: 2rem;
}

.leaderboard-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.leaderboard-header p {
  color: #93c5fd;
  font-size: 1.25rem;
}

.leaderboard-card {
  width: 100%;
  max-width: 600px;
}

.btn-back {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
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
