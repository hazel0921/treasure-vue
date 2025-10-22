// src/store/index.js
import { createStore } from 'vuex'

/* ================================
 🧍 用户模块：积分 + 等级 + 名称
=================================*/
const userModule = {
  namespaced: true,
  state: () => ({
    playerName: '冒险者',
    score: 0,
    level: 1,
    completedQuests: 0,
  }),
  mutations: {
    setName(state, name) {
      state.playerName = name
    },
    addScore(state, points) {
      state.score += points
      // 每累计 500 分升级
      state.level = Math.floor(state.score / 500) + 1
    },
    completeQuest(state) {
      state.completedQuests++
    },
    reset(state) {
      state.score = 0
      state.level = 1
      state.completedQuests = 0
    },
  },
  getters: {
    rankTitle(state) {
      if (state.level < 2) return '新手探险者'
      if (state.level < 4) return '熟练的寻宝人'
      if (state.level < 6) return '传奇冒险家'
      return '神秘的宝藏王'
    },
  },
}

/* ================================
 🎮 游戏模块：进度 + 当前任务 + 场景
=================================*/
const gameModule = {
  namespaced: true,
  state: () => ({
    explorationProgress: 0,
    currentQuest: null,
    unlockedScenes: ['library'],
    isPlaying: false,
  }),
  mutations: {
    setProgress(state, value) {
      state.explorationProgress = Math.min(100, value)
    },
    setQuest(state, quest) {
      state.currentQuest = quest
    },
    unlockScene(state, sceneId) {
      if (!state.unlockedScenes.includes(sceneId)) {
        state.unlockedScenes.push(sceneId)
      }
    },
    startGame(state) {
      state.isPlaying = true
      state.explorationProgress = 0
    },
    endGame(state) {
      state.isPlaying = false
    },
    reset(state) {
      state.explorationProgress = 0
      state.unlockedScenes = ['library']
      state.currentQuest = null
    },
  },
  getters: {
    unlockedCount: state => state.unlockedScenes.length,
  },
}

/* ================================
 🏆 排行榜模块：玩家列表
=================================*/
const leaderboardModule = {
  namespaced: true,
  state: () => ({
    players: [
      { id: 1, username: '宝藏猎人', score: 1500, avatar: '🧭', level: 5 },
      { id: 2, username: '探险家A', score: 980, avatar: '🦊', level: 3 },
      { id: 3, username: '智者B', score: 860, avatar: '🧙‍♂️', level: 2 },
    ],
  }),
  mutations: {
    addPlayer(state, player) {
      state.players.push(player)
    },
    updatePlayerScore(state, { username, score }) {
      const found = state.players.find(p => p.username === username)
      if (found) found.score = score
    },
    syncUserToLeaderboard(state, user) {
      const existing = state.players.find(p => p.username === user.playerName)
      if (existing) {
        existing.score = user.score
        existing.level = user.level
      } else {
        state.players.push({
          id: Date.now(),
          username: user.playerName,
          score: user.score,
          level: user.level,
          avatar: '🧭',
        })
      }
      // 排序：高分在前
      state.players.sort((a, b) => b.score - a.score)
    },
  },
}

/* ================================
 🏗️ 创建 Vuex Store
=================================*/
export default createStore({
  modules: {
    user: userModule,
    game: gameModule,
    leaderboard: leaderboardModule,
  },
})
