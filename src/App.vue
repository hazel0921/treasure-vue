<template>
  <!-- App.vue 只负责显示路由页面 -->
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 可以保留全局样式或背景色 */
body {
  margin: 0;
  font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
  background: radial-gradient(circle at center, #0f172a, #020617);
  color: #fff;
}
</style>
