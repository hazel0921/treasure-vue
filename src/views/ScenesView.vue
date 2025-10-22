<template>
  <div class="page fade-in">
    <h1 class="text-gradient">🌍 多个场景</h1>
    <p>探索不同的神秘区域，发现隐藏的宝藏与线索！</p>

    <!-- ✅ 场景卡片列表 -->
    <div class="scenes-list">
      <SceneCard
        v-for="(scene, index) in scenes"
        :key="index"
        :scene="scene"
        @select="openModal"
      />
    </div>

    <!-- ✅ 模态框 -->
    <div v-if="selectedScene" class="modal-backdrop" @click.self="closeModal">
      <div class="modal-card fade-in">
        <div class="modal-icon">{{ selectedScene.icon }}</div>
        <h2>{{ selectedScene.title }}</h2>
        <p>{{ selectedScene.details }}</p>

        <!-- 🚀 前往场景按钮 -->
        <button class="btn-go" @click="goToScene(selectedScene)">
          🚀 前往此场景
        </button>

        <!-- ❌ 关闭按钮 -->
        <button class="btn-close" @click="closeModal">关闭</button>
      </div>
    </div>

    <!-- 返回首页 -->
    <router-link to="/" class="btn-back">⬅ 返回首页</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SceneCard from './SceneCard.vue'

const router = useRouter()
const selectedScene = ref(null)

// ✅ 多个场景定义（火山改为智者交易）
const scenes = ref([
  {
    id: 'library',
    title: '📚 图书馆',
    icon: '📖',
    description: '古老文献中藏有秘密线索。',
    details: '尝试解读古文...',
  },
  {
    id: 'temple',
    title: '🏛️ 神庙',
    icon: '⛩️',
    description: '破解机关，开启宝藏之门。',
    details: '进入神庙，四处搜寻...',
  },
  {
    id: 'cave',
    title: '🌊 海底洞穴',
    icon: '🐚',
    description: '神秘光芒指引着未知的方向。',
    details: '发现通往海底的秘密通道，潜水探索...',
  },
  {
    id: 'sage',
    title: '👴 智者交易',
    icon: '🧙‍♂️',
    description: '路途中遇见一位智者，可以选择交易或解谜。',
    details: '智者提出交易条件或谜题挑战。',
  },
])

// 打开模态框
function openModal(scene) {
  selectedScene.value = scene
}

// 关闭模态框
function closeModal() {
  selectedScene.value = null
}

// 🚀 跳转至详情页
function goToScene(scene) {
  const targetScene = { ...scene } // 复制，避免被清空
  closeModal()

  setTimeout(() => {
    router.push({
      name: 'SceneDetail', // ✅ 用路由name跳转最稳
      query: targetScene
    })
  }, 200)
}
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

.scenes-list {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

/* ✅ 模态框样式 */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 400px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  color: white;
}

.modal-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

/* 🚀 前往按钮 */
.btn-go {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}
.btn-go:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(34, 197, 94, 0.4);
}

/* 关闭按钮 */
.btn-close {
  margin-top: 1rem;
  padding: 0.6rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border: none;
  border-radius: 0.75rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-close:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

/* 返回按钮 */
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
