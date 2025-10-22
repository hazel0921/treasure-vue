<template>
  <div class="app-container">
    <header class="app-header">
      <h1 class="text-gradient">🗺️ 寻宝冒险</h1>
      <p>探索神秘世界，寻找失落宝藏</p>
    </header>
    
    <main class="app-main">
      <div class="welcome-card fade-in">
        <div class="card-icon">🎮</div>
        <h2>欢迎来到寻宝游戏！</h2>
        <p>Vue3 开发环境配置成功！开始构建您的冒险世界吧！</p>
        
        <!-- ✅ 功能卡片区域 -->
        <div class="feature-grid">
          <!-- 积分系统 -->
          <router-link to="/score" class="feature-card link-card">
            <span class="feature-icon">🏆</span>
            <h4>积分系统</h4>
            <p>通过探索获得积分</p>
          </router-link>

          <!-- 多个场景 -->
          <router-link to="/scenes" class="feature-card link-card">
            <span class="feature-icon">🗺️</span>
            <h4>多个场景</h4>
            <p>图书馆、神庙、海底洞穴</p>
          </router-link>

          <!-- 任务挑战 -->
          <router-link to="/tasks" class="feature-card link-card">
            <span class="feature-icon">🎯</span>
            <h4>任务挑战</h4>
            <p>解谜题、寻宝藏</p>
          </router-link>

          <!-- 排行榜 -->
          <router-link to="/leaderboard" class="feature-card link-card">
            <span class="feature-icon">🏆</span>
            <h4>排行榜</h4>
            <p>与其他玩家竞争</p>
          </router-link>
        </div>
        
        <!-- ✅ 底部按钮 -->
        <div class="action-buttons">
          <router-link to="/game" class="btn btn-primary">
            🎮 开始游戏
          </router-link>
          <router-link to="/login" class="btn btn-secondary">
             🔐 登录 / 注册
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
/* 保留原样式 */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.app-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.app-header p {
  color: #93c5fd;
  font-size: 1.25rem;
}

.app-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.welcome-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 3rem;
  text-align: center;
  max-width: 800px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.welcome-card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

.welcome-card p {
  color: #93c5fd;
  margin-bottom: 2rem;
  font-size: 1.125rem;
  line-height: 1.6;
}

/* ✅ 卡片区域 */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

/* ✅ 可点击卡片 */
.feature-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: white;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.feature-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.feature-card h4 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.feature-card p {
  color: #cbd5e1;
  font-size: 0.875rem;
  margin: 0;
}

/* 底部按钮 */
.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
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

.text-gradient {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .app-header h1 {
    font-size: 2rem;
  }
  
  .welcome-card {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
