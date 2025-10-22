<template>
  <div class="stat-card" :class="`stat-${color}`">
    <div class="stat-icon">{{ icon }}</div>
    <div class="stat-content">
      <h3 class="stat-title">{{ title }}</h3>
      <p class="stat-value">
        {{ value }}{{ suffix }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatCard',
  props: {
    title: String,
    value: [Number, String],
    suffix: {
      type: String,
      default: ''
    },
    icon: String,
    color: {
      type: String,
      default: 'blue'
    }
  }
}
</script>

<style scoped>
.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 2.5rem;
}

.stat-content {
  flex: 1;
}

.stat-title {
  color: #93c5fd;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.stat-value {
  color: white;
  font-size: 1.75rem;
  font-weight: bold;
  margin: 0;
}

.stat-gold .stat-value {
  color: #fbbf24;
}

.stat-green .stat-value {
  color: #34d399;
}

.stat-blue .stat-value {
  color: #60a5fa;
}
</style>