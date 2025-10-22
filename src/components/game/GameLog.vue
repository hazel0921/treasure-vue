<template>
  <div class="game-log">
    <div class="log-content">
      <div 
        v-for="(log, index) in logs" 
        :key="index"
        :class="['log-entry', log.type]"
      >
        <span class="log-time">{{ log.time }}</span>
        <span class="log-text">{{ log.text }}</span>
      </div>
      <div v-if="logs.length === 0" class="empty-log">
        还没有活动记录
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'GameLog',
  setup() {
    const store = useStore()
    const logs = computed(() => store.getters['game/gameLogs'])
    
    return {
      logs
    }
  }
}
</script>

<style scoped>
.game-log {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  padding: 1rem;
  max-height: 200px;
  overflow-y: auto;
}

.log-entry {
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.log-entry:last-child {
  border-bottom: none;
}

.log-time {
  color: #94a3b8;
  font-size: 0.8rem;
  min-width: 40px;
}

.log-text {
  color: #93c5fd;
  flex: 1;
}

.log-entry.success .log-text {
  color: #86efac;
}

.log-entry.info .log-text {
  color: #93c5fd;
}

.empty-log {
  text-align: center;
  color: #64748b;
  padding: 1rem;
}
</style>