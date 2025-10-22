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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes   // ✅ 使用上面定义的完整 routes 数组
})

export default router
