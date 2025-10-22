<template>
  <div class="game-settings">
    <h3>游戏设置</h3>
    
    <div class="setting-group">
      <label class="setting-label">
        <input
          type="checkbox"
          v-model="settings.allowDive"
          @change="updateSettings"
        />
        <span class="checkmark"></span>
        允许潜水探索
      </label>
      
      <label class="setting-label">
        <input
          type="checkbox"
          v-model="settings.preferRiddle"
          @change="updateSettings"
        />
        <span class="checkmark"></span>
        优先解谜题
      </label>
    </div>
    
    <div class="setting-slider">
      <label>守卫出现概率: {{ (settings.guardProb * 100).toFixed(0) }}%</label>
      <input
        type="range"
        v-model="settings.guardProb"
        min="0.1"
        max="0.5"
        step="0.05"
        @input="updateSettings"
        class="slider"
      />
    </div>
    
    <button @click="resetGame" class="reset-btn">
      🔄 重置游戏
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'GameSettings',
  
  setup() {
    const store = useStore()
    
    const settings = computed(() => store.getters['game/settings'])
    
    const updateSettings = () => {
      store.dispatch('game/updateSettings', settings.value)
    }
    
    const resetGame = () => {
      if (confirm('确定要重置游戏吗？所有进度将丢失！')) {
        store.dispatch('game/resetGame')
        store.dispatch('user/updateScore', -store.getters['user/userScore'])
      }
    }
    
    return {
      settings,
      updateSettings,
      resetGame
    }
  }
}
</script>

<style scoped>
.game-settings {
  background: rgba(30, 41, 59, 0.5);
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.game-settings h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.setting-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.setting-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #93c5fd;
  cursor: pointer;
}

.setting-label input {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid #3b82f6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.setting-label input:checked + .checkmark::after {
  content: '✓';
  color: #3b82f6;
}

.setting-slider {
  margin-bottom: 1.5rem;
}

.setting-slider label {
  display: block;
  color: #93c5fd;
  margin-bottom: 0.5rem;
}

.slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #475569;
  outline: none;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
}

.reset-btn {
  width: 100%;
  padding: 0.75rem;
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.5);
  color: #fca5a5;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.reset-btn:hover {
  background: rgba(239, 68, 68, 0.3);
}
</style>