<template>
  <div class="score-item fade-in">
    <div class="icon">🏆</div>
    <div class="content">
      <h3>{{ record.title }}</h3>
      <p>{{ record.description }}</p>
      <span class="points">+{{ record.points }} 分</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  record: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.score-item {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}
.score-item:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.1);
}
.icon {
  font-size: 2rem;
  margin-right: 1rem;
}
.content h3 {
  color: white;
  margin: 0;
}
.content p {
  color: #cbd5e1;
  margin: 0.25rem 0;
  font-size: 0.95rem;
}
.points {
  color: #22c55e;
  font-weight: 600;
  font-size: 0.95rem;
}
.fade-in {
  animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
