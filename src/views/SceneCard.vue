<template>
  <div class="scene-card fade-in" @click="selectScene">
    <div class="icon">{{ scene.icon }}</div>
    <div class="content">
      <h3>{{ scene.title }}</h3>
      <p>{{ scene.description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  scene: Object
})
const emit = defineEmits(['select'])
function selectScene() {
  emit('select', props.scene)
}
</script>

<style scoped>
.scene-card {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, background 0.3s;
  cursor: pointer;
}

.scene-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.1);
}

.icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.content h3 {
  color: white;
  margin: 0;
  font-size: 1.3rem;
}

.content p {
  color: #cbd5e1;
  margin: 0.25rem 0 0;
}

.fade-in {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
