<template>
  <section class="min-h-screen bg-black/90">
    <div class="mx-auto max-w-3xl px-4 py-16">
      <NuxtLink to="/news" class="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-400">
        ← 返回列表
      </NuxtLink>

      <article v-if="item" class="mt-6">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-full bg-emerald-900/40 text-emerald-300 border border-emerald-700">
            {{ item.tag }}
          </span>
          <time class="text-xs text-gray-400">{{ formatDate(item.date) }}</time>
        </div>
        <h1 class="mt-4 text-3xl md:text-4xl font-extrabold text-white">{{ item.title }}</h1>
        <p class="mt-3 text-gray-300">{{ item.excerpt }}</p>

        <div class="mt-8 prose prose-invert max-w-none">
          <p v-for="p in paragraphs" :key="p" class="text-gray-200 leading-7">{{ p }}</p>
        </div>
      </article>

      <div v-else class="mt-20 text-center text-gray-300">
        未找到该资讯或已下线。
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import newsData from '~/assets/data/news.json'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = String(route.params.id)
const item = newsData.find(n => n.id === id)

function formatDate(d: string) {
  const dt = new Date(d)
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`
}

const paragraphs = item ? String(item.content).split('\n').filter(Boolean) : []
</script>