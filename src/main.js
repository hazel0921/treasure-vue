import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'  // ✅ 导入 Vuex


const app = createApp(App)
app.use(router)
app.use(store)  // ✅ 注册 Vuex
app.mount('#app')

console.log('🎮 寻宝冒险游戏启动成功！')