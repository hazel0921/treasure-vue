<template>
  <div class="game-wrapper">
    <div class="stars" id="stars"></div>

    <div class="card">
      <header>
        <h1>寻宝动画</h1>
        <div class="controls">
          <button id="startBtn">开始寻宝</button>
          <button id="resetBtn" class="secondary">重置</button>
          <button id="downloadBtn" class="secondary">下载 HTML</button>
        </div>
      </header>

      <main>
        <section class="stage">
          <div class="log" id="log"></div>
          <div class="progressWrap" aria-hidden>
            <div class="progress" id="progress"></div>
          </div>
          <div style="margin-top:12px;font-size:14px">
            <label>守卫出现概率:
              <input id="guardProb" type="range" min="0" max="1" step="0.05" value="0.25" />
              <span id="guardProbVal">0.25</span>
            </label><br />
            <label><input type="checkbox" id="allowDive" checked /> 允许潜水探索海底洞穴</label><br />
            <label><input type="checkbox" id="preferRiddle" /> 优先选择解谜而非交易</label>
          </div>
        </section>

        <aside class="map" id="map">
          <svg width="340" height="400" style="position:absolute;top:12px;left:12px;pointer-events:none;overflow:visible;">
            <path
              id="path"
              d="M30,30 C150,80 220,50 220,160 S300,260 300,370"
              stroke="rgba(0,200,255,0.3)"
              fill="none"
              stroke-width="2"
              stroke-dasharray="4 4"
            />
          </svg>
          <div class="animIcon" id="icon">🧭</div>
          <div class="scene" id="scene1"></div>
          <div class="scene" id="scene2"></div>
          <div class="scene" id="scene3"></div>
          <div class="legend">
            场景：图书馆 → 神庙 → 宝箱<br />
            （新增情节：谜题、守卫、海底洞穴、智者交易）
          </div>
        </aside>
      </main>

      <footer>关键节点会出现额外图标动画 ✨</footer>
    </div>

    <!-- 🏠 返回首页按钮 -->
    <router-link to="/" class="btn-back">🏠 返回首页</router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 星空背景
  const svg = document.querySelector('.map svg');
  const path = document.getElementById('path');
  const map = document.getElementById('map');
  const pathLength = path.getTotalLength();
  const starsContainer = document.getElementById('stars')
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div')
    s.className = 'star'
    s.style.position = 'absolute'
    s.style.width = '2px'
    s.style.height = '2px'
    s.style.background = 'white'
    s.style.borderRadius = '50%'
    s.style.top = Math.random() * 100 + '%'
    s.style.left = Math.random() * 100 + '%'
    s.style.opacity = 0.8
    s.style.animation = `twinkle 3s infinite ease-in-out`
    s.style.animationDelay = Math.random() * 3 + 's'
    starsContainer.appendChild(s)
  }

  const logEl = document.getElementById('log')
  const progressEl = document.getElementById('progress')
  const icon = document.getElementById('icon')

  function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }

  function addLog(text, cls = '') {
    const d = document.createElement('div')
    d.className = 'event ' + cls
    d.innerHTML = `<div class="bubble"><span>🔎</span></div><div><div class="status">${text}</div></div>`
    logEl.appendChild(d)
    logEl.scrollTop = logEl.scrollHeight
  }

  function setProgress(p) {
    progressEl.style.width = Math.max(0, Math.min(100, p)) + '%'
  }

  // 将 SVG 点转换为相对于 .map 容器的像素坐标
function svgPointToMapCoords(svgPoint) {
  // 创建 SVGPoint 并把 svgPoint 的坐标赋进去
  const pt = svg.createSVGPoint();
  pt.x = svgPoint.x;
  pt.y = svgPoint.y;

  // 把 SVG 坐标转换为屏幕坐标（相对于 viewport）
  const screenCTM = svg.getScreenCTM(); // 注意：getScreenCTM() 比 getCTM() 更可靠用于屏幕映射
  const globalPt = pt.matrixTransform(screenCTM);

  // 然后把屏幕坐标映射为相对于 .map 容器左上角的坐标
  const mapRect = map.getBoundingClientRect();
  return {
    x: globalPt.x - mapRect.left,
    y: globalPt.y - mapRect.top
  };
}
// 新的 dropMapIcon：使用上面的转换
function dropMapIcon(percent, emoji) {
  const svgPoint = path.getPointAtLength(pathLength * percent);
  const coords = svgPointToMapCoords(svgPoint);

  const div = document.createElement('div');
  div.className = 'mapIcon';
  div.textContent = emoji;

  // 绝对定位，相对于 .map，居中显示（CSS 会用 translate(-50%,-50%)）
  div.style.left = `${coords.x}px`;
  div.style.top = `${coords.y}px`;

  map.appendChild(div);
}

  let currentPercent = 0
  let targetPercent = 0
  let animating = false

  function animateIconAlongPath(toPercent) {
  targetPercent = toPercent;
  if (!animating) {
    animating = true;
    requestAnimationFrame(step);
  }
}

function step() {
  currentPercent += (targetPercent - currentPercent) * 0.08;
  if (Math.abs(targetPercent - currentPercent) < 0.0005) currentPercent = targetPercent;

  const svgPoint = path.getPointAtLength(pathLength * currentPercent);
  const coords = svgPointToMapCoords(svgPoint);

    // 使用转换后的坐标来移动 animIcon
  // 注意：animIcon 在 CSS 中不要额外做 translate(-50%,-50%)，这里我们直接把 transform 设置为 translate(xpx, ypx)
  icon.style.transform = `translate(${coords.x}px, ${coords.y}px)`;

  if (Math.abs(targetPercent - currentPercent) > 0.0005) {
    requestAnimationFrame(step);
  } else {
    animating = false;
  }
}


  async function findTreasureAsync() {
    logEl.innerHTML = ''
    setProgress(0)
    animateIconAlongPath(0)
    try {
      addLog('🌌 任务开始：踏入图书馆...')
      setProgress(10)
      await wait(600)
      dropMapIcon(0.2, '📜')

      addLog('👴 遇见智者，进行交易...')
      setProgress(40)
      await wait(600)
      dropMapIcon(0.45, '👴')

      addLog('🏛️ 进入神庙，继续探索...')
      setProgress(70)
      await wait(800)
      dropMapIcon(0.7, '🏛️')

      addLog('🌊 潜入海底洞穴...')
      setProgress(90)
      await wait(800)
      dropMapIcon(0.85, '🌊')

      addLog('💎 找到宝藏！')
      setProgress(100)
      dropMapIcon(1, '💎')
    } catch (err) {
      addLog('❌ 任务失败：' + err.message, 'fail')
    }
  }

  document.getElementById('startBtn').addEventListener('click', () => findTreasureAsync())
  document.getElementById('resetBtn').addEventListener('click', () => {
    logEl.innerHTML = ''
    setProgress(0)
    currentPercent = 0
    targetPercent = 0
    icon.style.transform = 'translate(0,0)'
    map.querySelectorAll('.mapIcon').forEach(e => e.remove())
    addLog('已重置')
  })
  document.getElementById('guardProb').addEventListener('input', e => {
    document.getElementById('guardProbVal').innerText = e.target.value
  })

  addLog('页面就绪 — 点击“开始寻宝”以运行流程')
})
</script>

<style scoped>
body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial;background:radial-gradient(circle at center,#0a1a2f 0%,#050b14 100%);color:#e6f0f6;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;overflow:hidden}
.card{width:960px;max-width:96%;background:rgba(255,255,255,0.05);border-radius:18px;padding:20px;box-shadow:0 12px 36px rgba(2,6,23,0.7);position:relative;overflow:hidden}
header{display:flex;align-items:center;justify-content:space-between;animation:fadeInDown 1s ease}
h1{font-size:22px;margin:0}
.controls{display:flex;gap:8px;flex-wrap:wrap}
button{background:#1e88e5;border:none;padding:8px 12px;border-radius:8px;color:white;cursor:pointer;transition:transform .2s,background .2s}
button:hover{transform:scale(1.05);background:#42a5f5}
button.secondary{background:#2e2e2e}
main{display:flex;gap:16px;margin-top:14px}
.stage{flex:1;min-height:400px;background:linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01));border-radius:12px;padding:12px;overflow:hidden;position:relative}
.log{height:400px;overflow:auto;padding:8px;border-radius:6px;background:linear-gradient(180deg,rgba(0,0,0,0.25),rgba(255,255,255,0.05));animation:fadeIn 1s ease}
.event{margin:6px 0;padding:8px;border-radius:6px;background:rgba(255,255,255,0.06);display:flex;gap:8px;align-items:center;animation:slideIn 0.6s ease}
.bubble{min-width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.1);box-shadow:0 0 8px rgba(255,255,255,0.1) inset}
.bubble span{font-size:18px;animation:pulse 1.5s infinite}
.status{font-size:14px;color:#cfe8ff}
.progressWrap{height:12px;background:rgba(255,255,255,0.1);border-radius:999px;margin-top:8px;overflow:hidden}
.progress{height:100%;width:0%;background:linear-gradient(90deg,#ffd166,#ef476f,#06d6a0);border-radius:999px;transition:width 600ms cubic-bezier(.4,0,.2,1)}
.map{position: relative; width:340px;height:420px;background:linear-gradient(180deg,#021021,#062f3f);border-radius:12px;padding:12px;box-shadow:inset 0 0 20px rgba(0,255,255,0.2);position:relative;overflow:visible}
.map .scene{height:100px;border-radius:6px;background:rgba(255,255,255,0.05);margin-bottom:16px;position:relative;overflow:hidden}
.animIcon{position:absolute;font-size:28px;transform:translate(0,0);pointer-events:none;}
.mapIcon {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 22px;
  /* 以坐标点为中心显示 */
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: transform 0.18s ease, opacity 0.18s ease;
  /* 进入动画 */
  animation: popIn 0.45s forwards;
}
.legend{font-size:12px;color:#9fb9c9;animation:fadeInUp 1.2s ease;margin-top:6px}
footer{margin-top:12px;font-size:13px;color:#9fb9c9;text-align:center;animation:fadeIn 2s ease}
.success{color:#b7f3c6;animation:glowSuccess 1.2s ease-in-out infinite alternate}
.fail{color:#ffc9c9;animation:shake 0.4s ease}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeInDown{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes slideIn{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
@keyframes glowSuccess{from{text-shadow:0 0 6px #2ecc71}to{text-shadow:0 0 16px #27ae60}}
@keyframes shake{10%,90%{transform:translateX(-2px);}20%,80%{transform:translateX(4px);}30%,50%,70%{transform:translateX(-6px);}40%,60%{transform:translateX(6px);}}
@keyframes twinkle{0%,100%{opacity:0.2}50%{opacity:1}}
@keyframes popIn {
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
/* 🏠 返回首页按钮 */
.btn-back{
  display:inline-block;
  margin-top:2rem;
  padding:0.8rem 1.5rem;
  border-radius:0.75rem;
  background:linear-gradient(135deg,#3b82f6,#8b5cf6);
  color:white;
  text-decoration:none;
  font-weight:600;
  transition:all 0.3s ease;
  position:fixed;
  bottom:20px;
  left:50%;
  transform:translateX(-50%);
}
.btn-back:hover{
  transform:translateX(-50%) translateY(-2px);
  box-shadow:0 8px 25px rgba(59,130,246,0.4);
}
</style>
