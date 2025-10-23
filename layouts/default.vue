<template>
  <div
    class="min-h-screen flex flex-col"
    :style="{ background: '#000', minHeight: '100vh' }"
  >
    <!-- 导航栏 -->
    <AppHeader />

    <!-- 主要内容区域 -->
    <main class="flex-1" :style="{ background: 'transparent' }">
      <slot />
    </main>

    <!-- 页脚 -->
    <AppFooter />
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  titleTemplate: "",
  meta: [
    {
      name: "description",
      content: "基于Nuxt.js 3和Element Plus构建的现代化官网",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { charset: "utf-8" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<style scoped>
/* 布局特定样式 */
</style>