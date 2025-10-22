<template>
  <div class="scene-detail fade-in">
    <header class="scene-header">
      <h1 class="text-gradient">{{ sceneData.icon }} {{ sceneData.title }}</h1>
      <p>{{ sceneData.description }}</p>
    </header>

    <main class="scene-content">
      <div class="scene-card">
        <div class="scene-icon">{{ sceneData.icon }}</div>
        <h2>{{ sceneData.title }}</h2>
        <p>{{ sceneData.details }}</p>

        <!-- 🚀 模拟互动按钮 -->
        <div class="action-buttons">
          <button class="btn-primary" @click="exploreScene">
            🔎 探索此场景
          </button>
          <button class="btn-secondary" @click="getHint">
            💡 获取提示
          </button>
        </div>
      </div>

      <!-- 📜 探索日志 -->
      <div v-if="logMessages.length" class="log-card">
        <h3>📜 探索日志</h3>
        <ul>
          <li v-for="(msg, index) in logMessages" :key="index">{{ msg }}</li>
        </ul>
      </div>
    </main>

    <footer class="scene-footer">
      <router-link to="/" class="btn-back">🏠 返回首页</router-link>
      <router-link to="/scenes" class="btn-back">⬅ 返回上一级</router-link>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// ✅ 从路由参数接收场景信息
const sceneData = ref({
  id: route.query.id || 'unknown',
  title: route.query.title || '未知场景',
  icon: route.query.icon || '🗺️',
  description: route.query.description || '暂无简介',
  details: route.query.details || '暂无详情。',
})

// 📜 日志记录
const logMessages = ref([])

function exploreScene() {
  logMessages.value.push(`🚶 你开始探索【${sceneData.value.title}】...`)
  setTimeout(() => {
    logMessages.value.push('🔍 发现新的线索！')
  }, 1000)
}

function getHint() {
  const hints = [
    '💡 有些线索藏在不起眼的角落。',
    '🧭 也许智者知道宝藏的方向。',
    '🕯️ 光线照射处往往隐藏秘密。',
  ]
  const hint = hints[Math.floor(Math.random() * hints.length)]
  logMessages.value.push(hint)
}
</script>

<style scoped>
.scene-detail {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  color: white;
  background: radial-gradient(circle at center, #0f172a, #020617);
}

/* 头部 */
.scene-header {
  text-align: center;
  margin-bottom: 2rem;
}

.scene-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.scene-header p {
  color: #93c5fd;
  font-size: 1.2rem;
}

/* 场景卡片 */
.scene-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  max-width: 600px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.scene-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.scene-card h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.scene-card p {
  color: #cbd5e1;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

/* 按钮 */
.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 0.8rem 1.6rem;
  border-radius: 0.75rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

/* 日志卡片 */
.log-card {
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 600px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.log-card h3 {
  color: #60a5fa;
  margin-bottom: 1rem;
}
.log-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}
.log-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.95rem;
}

/* 底部按钮 */
.scene-footer {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.btn-back {
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

/* 动画与渐变 */
.text-gradient {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fade-in {
  animation: fadeIn 0.6s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
