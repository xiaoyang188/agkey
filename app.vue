<template>
  <NuxtLayout>
    <div class="page-wrapper" :class="{ 'page-loaded': pageLoaded }">
      <NuxtPage />
    </div>
    <!-- 重新启用自定义开屏动画 -->
    <SplashScreen v-if="showSplash" @finished="onSplashFinished" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 页面元数据
useHead({
  title: "战创AGKEY官网 - 电竞C位 战创就位",
  meta: [
    {
      name: "description",
      content: "战创AGKEY专注电竞桌、升降桌研发制造，35人专业研发团队，10万㎡专属工厂，10年无忧质保，打造电竞理想家",
    },
    { name: "keywords", content: "战创,AGKEY,电竞桌,升降桌,电竞周边,游戏桌,Z字桌腿,电竞装备" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#ef4444" },
  ],
  // 关键：为 html 与 body 设置内联背景样式，确保首屏就是黑色
  htmlAttrs: { style: "background:#000;" },
  bodyAttrs: {
    style: "background:#000; margin:0;",
  },
});

// 基于 sessionStorage 控制：仅在当前标签页首次加载时显示开屏
const SPLASH_KEY = "agkey:splash_shown";
const hasShown =
  typeof window !== "undefined" && sessionStorage.getItem(SPLASH_KEY) === "1";
const showSplash = ref(!hasShown);
// 如果已经显示过开屏动画，直接加载页面
const pageLoaded = ref(hasShown);

const onSplashFinished = () => {
  showSplash.value = false;
  // 添加延迟让页面内容淡入
  setTimeout(() => {
    pageLoaded.value = true;
  }, 100);
  
  try {
    sessionStorage.setItem(SPLASH_KEY, "1");
  } catch (_) {
    // 忽略存储失败（隐私模式等）
  }
};
</script>

<style>
/* 全局样式 - 页面过渡动画 */
.page-wrapper {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-wrapper.page-loaded {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* 为页面内的各个section添加渐进式动画 */
.page-wrapper.page-loaded .hero-section-modern,
.page-wrapper.page-loaded .products-section,
.page-wrapper.page-loaded .why-section,
.page-wrapper.page-loaded .brand-section,
.page-wrapper.page-loaded .services-section,
.page-wrapper.page-loaded .news-section {
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: calc(var(--section-index, 0) * 0.15s);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero区特殊动画 */
.page-wrapper.page-loaded .hero-section-modern {
  --section-index: 0;
}

.page-wrapper.page-loaded .products-section {
  --section-index: 1;
}

.page-wrapper.page-loaded .why-section {
  --section-index: 2;
}

.page-wrapper.page-loaded .brand-section {
  --section-index: 3;
}

.page-wrapper.page-loaded .services-section {
  --section-index: 4;
}

.page-wrapper.page-loaded .news-section {
  --section-index: 5;
}
</style>