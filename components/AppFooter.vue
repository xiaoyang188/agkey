<template>
  <footer class="bg-gray-900 text-white">
    <div class="container section-padding">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- 公司信息 -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <img src="../assets/logo.png" alt="战创AGKEY" class="w-8 h-8" />
            </div>
            <span class="text-xl font-bold text-[#ef4444]">战创 AGKEY</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            专注电竞桌、升降桌研发制造，2024年一群怀揣电竞梦想的年轻人热衷于极致创立了战创。35人专业研发团队，10万㎡专属工厂，10年无忧质保。
          </p>
          <div class="flex space-x-4">
            <el-button text class="text-gray-400 hover:text-white p-2">
              <el-icon size="20">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </el-icon>
            </el-button>
            <el-button text class="text-gray-400 hover:text-white p-2">
              <el-icon size="20">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </el-icon>
            </el-button>
            <el-button text class="text-gray-400 hover:text-white p-2">
              <el-icon size="20">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </el-icon>
            </el-button>
          </div>
        </div>

        <!-- 产品中心 -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">产品中心</h3>
          <ul class="space-y-2">
            <li v-for="item in productLinks" :key="item.name">
              <NuxtLink 
                :to="item.href" 
                class="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 品牌服务 -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">品牌服务</h3>
          <ul class="space-y-2">
            <li v-for="item in serviceLinks" :key="item.name">
              <div class="text-gray-400 text-sm flex items-center space-x-1">
                <span>✓</span>
                <span>{{ item.name }}</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- 联系我们 -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">联系我们</h3>
          <div class="space-y-3 text-sm text-gray-400">
            <div>
              <div class="font-semibold text-white mb-1">客服热线</div>
              <div class="flex items-center space-x-2">
                <el-icon><Phone /></el-icon>
                <span>400-XXX-XXXX</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-white mb-1">商务合作</div>
              <div class="flex items-center space-x-2">
                <el-icon><Message /></el-icon>
                <span>business@agkey.com</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-white mb-1">工作时间</div>
              <div class="text-gray-400">周一至周日 9:00-21:00</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部版权信息 -->
      <div class="border-t border-gray-800 mt-12 pt-8">
        <div class="text-center text-gray-400 text-sm">
          <p class="mb-2">
            Copyright © {{ currentYear }} 战创AGKEY科技有限公司 All Rights Reserved.
          </p>
          <p class="text-xs">
            <span class="hover:text-white transition-colors cursor-pointer">电竞C位 战创就位</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Location, Phone, Message } from '@element-plus/icons-vue'

// 当前年份
const currentYear = new Date().getFullYear()

// 产品中心链接
const productLinks = [
  { name: '电竞桌', href: '#' },
  { name: '升降桌', href: '#' },
  { name: '电竞周边', href: '#' },
  { name: '战创·Z字桌腿', href: '#' },
  { name: 'S-3系列', href: '#' }
]

// 品牌服务
const serviceLinks = [
  { name: '3期免息' },
  { name: '送货上门' },
  { name: '快速极换新' },
  { name: '原价10年' },
  { name: '7天试用' },
  { name: '7天保价' },
  { name: '配件只换不修' }
]
</script>

<style scoped>
/* 页脚特定样式 */
</style>