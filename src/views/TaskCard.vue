<template>
  <div class="task-card fade-in" @click="toggle">
    <div class="icon">{{ task.icon }}</div>
    <div class="info">
      <h3>{{ task.title }}</h3>
      <p>{{ task.description }}</p>
    </div>
    <span v-if="completed" class="done">✅ 领取积分</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  task: Object
})
const completed = ref(false)

function toggle() {
  completed.value = !completed.value
}
</script>

<style scoped>
.task-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.task-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
.icon {
  font-size: 2rem;
  margin-right: 1rem;
}
.info {
  flex: 1;
  text-align: left;
}
.info h3 {
  color: white;
  margin: 0;
}
.info p {
  color: #cbd5e1;
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
}
.done {
  color: #22c55e;
  font-weight: 600;
}
.fade-in {
  animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
