<template>
  <div class="splash" :class="{ 'fade-out': fadeOut, 'zoom-out': zoomOut }" :style="criticalStyle">
    <!-- 动态背景层 -->
    <div class="splash-bg">
      <!-- 径向渐变光晕 -->
      <div class="radial-glow" :class="{ 'pulse': showGlow }"></div>
      
      <!-- 粒子系统 -->
      <div class="particles">
        <div v-for="i in 30" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
      
      <!-- 网格背景 -->
      <div class="grid-background"></div>
      
      <!-- 扫描线效果 -->
      <div class="scan-line" :class="{ 'scanning': isScanning }"></div>
    </div>
    
    <!-- Logo 主体 -->
    <div class="logo-wrapper" :class="{ 'scale-up': scaleUp }">
      <!-- 外圈光环 -->
      <div class="logo-ring" :class="{ 'rotate': showRing }"></div>
      
      <!-- Logo 容器 -->
      <div class="logo-container">
        <div class="logo" v-html="logoHtml"></div>
      </div>
      
      <!-- 品牌标语 -->
      <div class="tagline-wrapper" :class="{ 'show': showTagline }">
        <div class="tagline-line"></div>
        <div class="tagline">年轻人的选择</div>
        <div class="tagline-line"></div>
      </div>
      
      <!-- 加载进度 -->
      <div class="loading-bar" :class="{ 'show': showProgress }">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const fadeOut = ref(false);
const zoomOut = ref(false);
const scaleUp = ref(false);
const showTagline = ref(false);
const showGlow = ref(false);
const showRing = ref(false);
const showProgress = ref(false);
const isScanning = ref(false);
const progress = ref(0);
const emit = defineEmits<{ finished: [] }>();

// 关键：在样式尚未完全加载时也能立即呈现黑色覆盖层，避免首屏白闪
const criticalStyle = {
  position: "fixed",
  inset: "0",
  width: "100vw",
  height: "100vh",
  background: "#000",
  display: "grid",
  placeItems: "center",
  overflow: "hidden",
  zIndex: 9999,
};

const brand = "agkey";
const logoHtml = `
<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${brand}">
  <title>${brand}</title>
  <defs>
    <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="50%" stop-color="#f87171"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
    <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(239, 68, 68, 0.15)"/>
      <stop offset="50%" stop-color="rgba(248, 113, 113, 0.30)"/>
      <stop offset="100%" stop-color="rgba(220, 38, 38, 0.15)"/>
    </linearGradient>
  </defs>

  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
        class="text-outline"
        font-family="Arial, sans-serif"
        font-size="100"
        font-weight="800">${brand}</text>

  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
        class="text-fill"
        font-family="Arial, sans-serif"
        font-size="100"
        font-weight="800">${brand}</text>
</svg>
`;

// 生成粒子样式
const getParticleStyle = (index: number) => {
  const angle = (index / 20) * 360;
  const distance = 50 + Math.random() * 100;
  return {
    '--angle': `${angle}deg`,
    '--distance': `${distance}px`,
    '--delay': `${Math.random() * 1}s`,
    '--duration': `${1.5 + Math.random()}s`
  };
};

const startFadeOut = () => {
  zoomOut.value = true;
  fadeOut.value = true;
  setTimeout(() => emit("finished"), 800);
};

onMounted(() => {
  // 动画时序编排
  setTimeout(() => {
    scaleUp.value = true;
    showGlow.value = true;
  }, 100);
  
  setTimeout(() => {
    showRing.value = true;
    isScanning.value = true;
  }, 300);
  
  setTimeout(() => {
    showProgress.value = true;
  }, 500);
  
  // 进度条动画
  const progressInterval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 2;
    }
  }, 20);
  
  setTimeout(() => {
    showTagline.value = true;
  }, 1200);
  
  setTimeout(() => {
    clearInterval(progressInterval);
    progress.value = 100;
    startFadeOut();
  }, 2500);
});
</script>

<style scoped>
.splash {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: grid;
  place-items: center;
  overflow: hidden;
  z-index: 9999;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.splash.fade-out {
  opacity: 0;
}

.splash.zoom-out {
  transform: scale(1.3);
  filter: blur(20px);
}

/* 背景层 */
.splash-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

/* 径向光晕 */
.radial-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(239, 68, 68, 0.4) 0%,
    rgba(239, 68, 68, 0.2) 30%,
    transparent 70%
  );
  filter: blur(60px);
  opacity: 0;
  transition: opacity 0.8s ease;
}

.radial-glow.pulse {
  opacity: 1;
  animation: glowPulse 2s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 1;
  }
}

/* 网格背景 */
.grid-background {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(239, 68, 68, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(239, 68, 68, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.3;
  animation: gridFloat 20s linear infinite;
  transform: perspective(1000px) rotateX(60deg);
}

@keyframes gridFloat {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 60px;
  }
}

/* 扫描线 */
.scan-line {
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(239, 68, 68, 0.3),
    transparent
  );
  opacity: 0;
}

.scan-line.scanning {
  animation: scan 2s ease-in-out infinite;
}

@keyframes scan {
  0% {
    top: -100%;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

/* 粒子系统 */
.particles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(239, 68, 68, 0.8);
  border-radius: 50%;
  box-shadow: 
    0 0 10px rgba(239, 68, 68, 1),
    0 0 20px rgba(239, 68, 68, 0.5);
  animation: particleFloat var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes particleFloat {
  0%, 100% {
    transform: rotate(var(--angle)) translateX(0) scale(0);
    opacity: 0;
  }
  50% {
    transform: rotate(var(--angle)) translateX(var(--distance)) scale(1);
    opacity: 1;
  }
}

/* Logo 包装器 */
.logo-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0.5);
  opacity: 0;
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.logo-wrapper.scale-up {
  transform: scale(1);
  opacity: 1;
}

/* 旋转光环 */
.logo-ring {
  position: absolute;
  width: 500px;
  height: 500px;
  border: 3px solid transparent;
  border-top-color: rgba(239, 68, 68, 0.6);
  border-right-color: rgba(239, 68, 68, 0.3);
  border-radius: 50%;
  opacity: 0;
  transform: scale(0.8) rotate(0deg);
  transition: all 0.8s ease;
}

.logo-ring.rotate {
  opacity: 1;
  transform: scale(1) rotate(0deg);
  animation: ringRotate 3s linear infinite;
}

@keyframes ringRotate {
  0% {
    transform: scale(1) rotate(0deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}

/* Logo 容器 */
.logo-container {
  position: relative;
  z-index: 3;
  width: min(700px, 85vw);
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 40px rgba(239, 68, 68, 0.8));
}

.logo svg {
  width: 100%;
}

/* 标语包装器 */
.tagline-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(30px) scale(0.8);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.tagline-wrapper.show {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.tagline-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(239, 68, 68, 0.8),
    transparent
  );
  animation: linePulse 2s ease-in-out infinite;
}

@keyframes linePulse {
  0%, 100% {
    opacity: 0.5;
    transform: scaleX(1);
  }
  50% {
    opacity: 1;
    transform: scaleX(1.2);
  }
}

.tagline {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ef4444;
  letter-spacing: 0.3em;
  text-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
  white-space: nowrap;
}

/* 加载进度条 */
.loading-bar {
  margin-top: 2rem;
  width: 300px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  opacity: 0;
  transform: scaleX(0);
  transition: all 0.5s ease;
}

.loading-bar.show {
  opacity: 1;
  transform: scaleX(1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(
    90deg,
    #ef4444,
    #f87171,
    #dc2626,
    #ef4444
  );
  background-size: 200% 100%;
  border-radius: 2px;
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: progressShine 1.5s ease-in-out infinite;
}

@keyframes progressShine {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
}

/* SVG 文字动画 */
.logo :deep(.text-outline) {
  fill: none;
  stroke: url(#gradientStroke);
  stroke-width: 3;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawText 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  filter: drop-shadow(0 0 15px rgba(239, 68, 68, 1));
}

@keyframes drawText {
  0% {
    stroke-dashoffset: 1000;
    stroke-width: 3;
  }
  100% {
    stroke-dashoffset: 0;
    stroke-width: 2;
  }
}

.logo :deep(.text-fill) {
  fill: url(#gradientFill);
  opacity: 0;
  animation: 
    fillText 1s ease-out 0.8s forwards,
    textGlow 2s ease-in-out 1.8s infinite;
}

@keyframes fillText {
  0% {
    opacity: 0;
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
  }
}

@keyframes textGlow {
  0%, 100% {
    filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 30px rgba(239, 68, 68, 1));
  }
}

/* Logo 辉光背景 */
.logo::after {
  content: '';
  position: absolute;
  inset: -30%;
  background: radial-gradient(
    circle,
    rgba(239, 68, 68, 0.4) 0%,
    rgba(239, 68, 68, 0.2) 30%,
    transparent 70%
  );
  animation: logoGlow 2.5s ease-in-out infinite;
  pointer-events: none;
  filter: blur(40px);
}

@keyframes logoGlow {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.15);
  }
}

/* 适配动画减弱偏好 */
@media (prefers-reduced-motion: reduce) {
  .logo :deep(.text-outline),
  .logo :deep(.text-fill),
  .particle,
  .glass,
  .tagline,
  .splash {
    animation: none !important;
    transition: none !important;
  }
}
</style>