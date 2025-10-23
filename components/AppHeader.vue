<template>
  <header
    class="modern-header"
    :class="{ 'scrolled': isScrolled }"
  >
    <nav class="container relative">
      <!-- 顶部主栏 -->
      <div class="flex items-center justify-between nav-content">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="logo-link">
            <div class="logo-container">
              <img src="../assets/logo.png" alt="战创AGKEY" class="logo-img" />
            </div>
            <span class="brand-name">战创 <span class="brand-sub">AGKEY</span></span>
          </NuxtLink>
        </div>

        <!-- 桌面端导航菜单 -->
        <div class="hidden md:block" @mouseleave="closeMega()">
          <div class="nav-menu">
            <button
              v-for="item in navigation"
              :key="item.name"
              class="nav-item"
              :class="{ 'active': activeMenu === item }"
              @mouseenter="onEnter(item)"
              @focus="onEnter(item)"
              @click="item.href ? navigate(item.href) : null"
            >
              {{ item.name }}
              <span v-if="item.children" class="nav-arrow">▼</span>
            </button>
          </div>
        </div>

        <!-- 右侧操作 -->
        <div class="hidden md:flex items-center space-x-3">
          <el-button type="danger" size="default" round class="contact-btn">
            联系我们
          </el-button>
        </div>

        <!-- 移动端菜单按钮 -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="mobile-menu-btn"
          >
            <el-icon size="24" class="text-white">
              <Menu v-if="!mobileMenuOpen" />
              <Close v-else />
            </el-icon>
          </button>
        </div>
      </div>

      <!-- Mega Menu 面板 - 优化设计 -->
      <transition name="mega-fade">
        <div
          v-if="megaOpen && activeMenu && activeMenu.children"
          class="mega-menu"
        >
          <div class="container py-10">
            <div class="mega-grid">
              <div v-for="group in activeMenu.children" :key="group.title" class="mega-group">
                <h4 class="mega-group-title">
                  {{ group.title }}
                </h4>
                <ul class="mega-list">
                  <li v-for="link in group.items" :key="link.name">
                    <NuxtLink
                      :to="link.href || '#'"
                      class="mega-link"
                    >
                      <span class="link-dot">•</span>
                      {{ link.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- 移动端菜单 -->
      <div v-show="mobileMenuOpen" class="md:hidden border-t border-white/10">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div v-for="item in navigation" :key="item.name" class="">
            <div class="flex items-center justify-between">
              <NuxtLink
                v-if="!item.children"
                :to="item.href || '/'"
                class="text-gray-300 hover:text-emerald-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                @click="mobileMenuOpen = false"
              >
                {{ item.name }} </NuxtLink
              ><button
                v-else
                class="w-full text-left text-gray-300 hover:text-emerald-400 px-3 py-2 text-base font-medium"
                @click="toggleMobileGroup(item.name)"
              >
                {{ item.name }}
              </button>
              <el-icon v-if="item.children" class="mr-3 text-gray-400">
                <ArrowDown v-if="!isMobileGroupOpen(item.name)" />
                <ArrowUp v-else />
              </el-icon>
            </div>
            <div
              v-if="item.children && isMobileGroupOpen(item.name)"
              class="pl-3 pb-2"
            >
              <div
                v-for="group in item.children"
                :key="group.title"
                class="mb-2"
              >
                <h4 class="text-xs font-semibold text-gray-500 mb-1">
                  {{ group.title }}
                </h4>
                <ul class="space-y-1">
                  <li v-for="link in group.items" :key="link.name">
                    <NuxtLink
                      :to="link.href || '#'"
                      class="block px-3 py-1 text-gray-300 hover:text-emerald-400"
                      @click="mobileMenuOpen = false"
                    >
                      {{ link.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="px-3 py-2">
            <el-button type="primary" size="default" class="w-full"
              >联系我们</el-button
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { Menu, Close, ArrowDown, ArrowUp } from "@element-plus/icons-vue";

const router = useRouter();
const route = useRoute();

// 滚动状态
const isScrolled = ref(false)

// 监听滚动
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
}

// 响应式状态
const mobileMenuOpen = ref(false);
const megaOpen = ref(false);
const activeMenu = ref(null);

// Mega Menu 展示控制
const onEnter = (item) => {
  activeMenu.value = item;
  megaOpen.value = !!item.children;
};
const closeMega = () => {
  megaOpen.value = false;
  activeMenu.value = null;
};
const navigate = (href) => router.push(href);

// 移动端折叠控制
const mobileGroups = ref({});
const toggleMobileGroup = (name) => {
  mobileGroups.value[name] = !mobileGroups.value[name];
};
const isMobileGroupOpen = (name) => !!mobileGroups.value[name];

// 路由变化时关闭菜单
watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false;
    closeMega();
  }
);

// 导航数据（战创AGKEY）
const navigation = [
  { name: "首页", href: "/" },
  {
    name: "所有商品",
    children: [
      {
        title: "电竞桌",
        items: [
          { name: "战创·Z字桌腿", href: "#" },
          { name: "S-3系列", href: "#" },
          { name: "专业电竞桌", href: "#" },
        ],
      },
      {
        title: "升降桌",
        items: [
          { name: "电动升降桌", href: "#" },
          { name: "手动升降桌", href: "#" },
        ],
      },
      {
        title: "电竞周边",
        items: [
          { name: "显示器支架", href: "#" },
          { name: "理线架", href: "#" },
          { name: "桌面垫", href: "#" },
        ],
      },
    ],
  },
  {
    name: "品牌简介",
    children: [
      {
        title: "关于战创",
        items: [
          { name: "品牌故事", href: "#" },
          { name: "企业实力", href: "#" },
          { name: "质量保证", href: "#" },
        ],
      },
      {
        title: "核心优势",
        items: [
          { name: "35人专业研发团队", href: "#" },
          { name: "10万㎡专属工厂", href: "#" },
          { name: "10年无忧质保", href: "#" },
        ],
      },
    ],
  },
  {
    name: "购买支持",
    children: [
      {
        title: "购买渠道",
        items: [
          { name: "京东旗舰店", href: "#" },
          { name: "天猫旗舰店", href: "#" },
          { name: "线下体验店", href: "#" },
        ],
      },
      {
        title: "售后服务",
        items: [
          { name: "送货上门", href: "#" },
          { name: "快速极换新", href: "#" },
          { name: "7天试用", href: "#" },
          { name: "7天保价", href: "#" },
          { name: "配件只换不修", href: "#" },
        ],
      },
    ],
  },
  { name: "新闻中心", href: "/news" },
];
</script>

<style scoped>
/* 现代化导航栏 */
.modern-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modern-header.scrolled {
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(30px) saturate(200%);
  border-bottom-color: rgba(239, 68, 68, 0.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.nav-content {
  height: 70px;
  transition: height 0.3s ease;
}

.modern-header.scrolled .nav-content {
  height: 60px;
}

/* Logo 样式 */
.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 12px;
}

.logo-link:hover {
  background: rgba(239, 68, 68, 0.1);
  transform: translateY(-2px);
}

.logo-container {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.3));
  backdrop-filter: blur(10px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(239, 68, 68, 0.3);
  transition: all 0.3s ease;
}

.logo-link:hover .logo-container {
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.5);
  transform: scale(1.05);
}

.logo-img {
  width: 24px;
  height: 24px;
  filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.5));
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 900;
  color: white;
  letter-spacing: 0.05em;
}

.brand-sub {
  color: #ef4444;
  font-weight: 900;
}

/* 导航菜单 */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-item {
  position: relative;
  padding: 0.75rem 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ef4444, transparent);
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-item:hover {
  color: white;
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
  transform: translateY(-2px);
}

.nav-item:hover::before {
  width: 80%;
}

.nav-item.active {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.15);
  border-color: rgba(239, 68, 68, 0.3);
}

.nav-arrow {
  font-size: 0.6rem;
  opacity: 0.6;
  transition: transform 0.3s ease;
}

.nav-item:hover .nav-arrow,
.nav-item.active .nav-arrow {
  transform: translateY(2px);
}

/* 联系按钮 */
.contact-btn {
  padding: 0.75rem 1.75rem !important;
  font-weight: 600 !important;
  box-shadow: 0 5px 15px rgba(239, 68, 68, 0.3) !important;
  transition: all 0.3s ease !important;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.5) !important;
}

/* 移动端菜单按钮 */
.mobile-menu-btn {
  padding: 0.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
}

/* Mega Menu 样式 */
.mega-menu {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  border-top: 1px solid rgba(239, 68, 68, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.mega-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
}

.mega-group {
  opacity: 0;
  animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.mega-group:nth-child(1) { animation-delay: 0s; }
.mega-group:nth-child(2) { animation-delay: 0.05s; }
.mega-group:nth-child(3) { animation-delay: 0.1s; }
.mega-group:nth-child(4) { animation-delay: 0.15s; }
.mega-group:nth-child(5) { animation-delay: 0.2s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mega-group-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: #ef4444;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(239, 68, 68, 0.2);
}

.mega-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mega-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 6px;
}

.link-dot {
  color: #ef4444;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.mega-link:hover {
  color: white;
  background: rgba(239, 68, 68, 0.1);
  transform: translateX(5px);
}

.mega-link:hover .link-dot {
  opacity: 1;
  transform: translateX(0);
}

/* Mega Menu 过渡动画 */
.mega-fade-enter-active,
.mega-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mega-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.mega-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 移动端菜单优化 */
.md\:hidden .space-y-1 {
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  margin-top: 1rem;
  padding: 1rem;
}

/* 响应式 */
@media (max-width: 768px) {
  .nav-content {
    height: 60px;
  }
  
  .brand-name {
    font-size: 1.1rem;
  }
  
  .logo-container {
    width: 36px;
    height: 36px;
  }
  
  .logo-img {
    width: 20px;
    height: 20px;
  }
}
</style>