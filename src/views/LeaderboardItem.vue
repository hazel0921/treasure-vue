<template>
  <div class="player-card fade-in">
    <div class="rank">{{ rank }}</div>
    <div class="avatar">{{ player.avatar }}</div>
    <div class="info">
      <div class="name">{{ player.name }}</div>
      <div class="score">💎 {{ player.score }} 分</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rank: Number,
  player: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.player-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, background 0.3s;
}

.player-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.1);
}

.rank {
  font-size: 1.5rem;
  font-weight: bold;
  color: #93c5fd;
  width: 2rem;
  text-align: center;
}

.avatar {
  font-size: 2rem;
  margin: 0 1rem;
}

.info {
  flex: 1;
  text-align: left;
}

.name {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
}

.score {
  color: #cbd5e1;
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
