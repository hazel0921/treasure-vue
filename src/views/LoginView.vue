<template>
  <div class="login-page fade-in">
    <h1 class="text-gradient">🔐 登录 / 注册</h1>
    <p>欢迎来到寻宝冒险世界！登录以保存进度或注册新账号。</p>

    <div class="login-card">
      <input type="text" placeholder="用户名" v-model="username" />
      <input type="password" placeholder="密码" v-model="password" />
      
      <div class="buttons">
        <button class="btn-primary" @click="login">登录</button>
        <button class="btn-secondary" @click="register">注册</button>
      </div>
    </div>

    <router-link to="/" class="btn-back">⬅ 返回首页</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

function login() {
  alert(`欢迎回来，${username.value || '玩家'}！`)
}

function register() {
  alert(`注册成功，欢迎加入冒险世界！`)
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #0f172a, #020617);
  color: white;
  text-align: center;
  padding: 2rem;
}

.login-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  max-width: 400px;
}

input {
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
}

input:focus {
  outline: 2px solid #3b82f6;
  background: rgba(255, 255, 255, 0.15);
}

.buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

button {
  padding: 0.8rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.btn-back {
  margin-top: 2rem;
  display: inline-block;
  text-decoration: none;
  color: #93c5fd;
  font-weight: 600;
  transition: color 0.3s ease;
}

.btn-back:hover {
  color: white;
}

.text-gradient {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
