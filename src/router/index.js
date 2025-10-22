import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/GameView.vue')
  },
  {
    path: '/score',
    name: 'ScoreSystem',
    component: () => import('../views/ScoreSystemView.vue')
  },
  {
    path: '/scenes',
    name: 'Scenes',
    component: () => import('../views/ScenesView.vue')
  },
  {
    path: '/scene-detail',
    name: 'SceneDetail',
    component: () => import('../views/SceneDetail.vue')
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import('../views/TasksView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: () => import('../views/LeaderboardView.vue')
  }
]

// 🚀 核心修复：手动指定 base 路径（Vite dev 模式下生效）
const router = createRouter({
  history: createWebHistory('/treasure-vue/'),
  routes
})

export default router
