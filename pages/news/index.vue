<template>
  <section class="min-h-screen bg-black/90">
    <div class="mx-auto max-w-6xl px-4 py-16">
      <header class="mb-8">
        <h1 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">品牌动态</h1>
        <p class="mt-3 text-gray-300">关注我们的最新合作、产品发布与获奖动态。</p>
      </header>

      <!-- 标签筛选 -->
      <div class="mb-6 flex flex-wrap gap-3">
        <button
          v-for="t in ['全部', ...tags]"
          :key="t"
          @click="selectedTag = t"
          class="px-3 py-1 rounded-full border text-sm"
          :class="[
            selectedTag === t
              ? 'bg-emerald-600 text-white border-emerald-500'
              : 'bg-gray-800 text-gray-200 border-gray-700 hover:border-emerald-500 hover:text-emerald-300'
          ]"
        >{{ t }}</button>
      </div>

      <!-- 卡片列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="item in paginatedNews"
          :key="item.id"
          :to="`/news/${item.id}`"
          class="group block rounded-xl border border-gray-800 bg-gray-900/70 p-5 shadow-md hover:shadow-lg hover:border-emerald-600 transition"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="inline-flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-full bg-emerald-900/40 text-emerald-300 border border-emerald-700">
              {{ item.tag }}
            </span>
            <time class="text-xs text-gray-400">{{ formatDate(item.date) }}</time>
          </div>
          <h3 class="text-lg font-semibold text-white group-hover:text-emerald-300">{{ item.title }}</h3>
          <p class="mt-2 text-sm text-gray-300 line-clamp-3">{{ item.excerpt }}</p>
        </NuxtLink>
      </div>

      <!-- 分页 -->
      <div class="mt-10 flex items-center justify-center gap-3">
        <button
          class="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 hover:border-emerald-600 hover:text-emerald-300 disabled:opacity-40"
          :disabled="page === 1"
          @click="page--"
        >上一页</button>
        <span class="text-gray-400 text-sm">第 {{ page }} / {{ totalPages }} 页</span>
        <button
          class="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 hover:border-emerald-600 hover:text-emerald-300 disabled:opacity-40"
          :disabled="page === totalPages"
          @click="page++"
        >下一页</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import newsData from '~/assets/data/news.json'
import { computed, ref } from 'vue'

const pageSize = 6
const page = ref(1)
const selectedTag = ref<string>('全部')

const tags = computed(() => Array.from(new Set(newsData.map(n => n.tag))))

const filtered = computed(() => {
  return selectedTag.value === '全部'
    ? newsData
    : newsData.filter(n => n.tag === selectedTag.value)
})

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / pageSize)))

const paginatedNews = computed(() => {
  const start = (page.value - 1) * pageSize
  return filtered.value.slice(start, start + pageSize)
})

function formatDate(d: string) {
  const dt = new Date(d)
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`
}
</script>