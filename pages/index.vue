<template>
  <div class="modern-homepage">
    <!-- Hero Section - 年轻潮流 with 3D -->
    <section
      class="hero-section-modern"
      ref="heroSection"
      @mousemove="handleMouseMove"
    >
      <div class="hero-bg">
        <!-- 3D 背景层 -->
        <div class="bg-layer layer-far" :style="layerStyle.far">
          <div class="hero-gradient"></div>
        </div>
        <div class="bg-layer layer-mid" :style="layerStyle.mid">
          <div class="grid-pattern"></div>
        </div>
        <div class="bg-layer layer-near" :style="layerStyle.near">
          <!-- 3D 几何元素 -->
          <div class="geometric-shapes">
            <div class="shape shape-cube"></div>
            <div class="shape shape-pyramid"></div>
            <div class="shape shape-ring"></div>
          </div>
        </div>
      </div>

      <div class="container hero-container" :style="contentStyle">
        <div class="hero-badge floating-3d">
          <span>🔥 年轻人的选择</span>
        </div>

        <h1 class="hero-title">
          <span class="line-1" data-depth="0.1">战创 AGKEY</span>
          <span class="line-2" data-depth="0.2">打造你的</span>
          <span class="line-3" data-depth="0.3">电竞理想空间</span>
        </h1>

        <p class="hero-subtitle" data-depth="0.15">
          专为新生代玩家设计 · Z字桌腿专利 · 10年品质保证
        </p>

        <div class="hero-actions" data-depth="0.2">
          <el-button
            type="danger"
            size="large"
            round
            class="action-primary btn-3d"
          >
            立即选购
          </el-button>
          <el-button size="large" round class="action-secondary btn-3d">
            探索更多
          </el-button>
        </div>

        <div class="hero-stats card-3d" data-depth="0.25">
          <div class="stat">
            <div class="stat-num">35+</div>
            <div class="stat-label">研发团队</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <div class="stat-num">10万㎡</div>
            <div class="stat-label">专属工厂</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <div class="stat-num">10年</div>
            <div class="stat-label">质保承诺</div>
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <div class="mouse-icon">
          <div class="wheel"></div>
        </div>
        <span>向下滚动</span>
      </div>
    </section>

    <!-- Products Section - 产品展示 -->
    <section class="products-section">
      <div class="container">
        <div class="section-head">
          <span class="tag">PRODUCTS</span>
          <h2 class="title">热门产品</h2>
          <p class="desc">为年轻玩家打造的专业装备</p>
        </div>

        <div class="products-grid">
          <div
            v-for="product in products"
            :key="product.id"
            class="product-card-modern card-3d-hover animate-item"
            @mouseenter="handleCardHover($event)"
            @mousemove="handleCardMove($event)"
            @mouseleave="handleCardLeave($event)"
          >
            <div class="product-img">
              <div class="img-placeholder">{{ product.icon }}</div>
              <div v-if="product.badge" class="product-badge badge-3d">
                {{ product.badge }}
              </div>
            </div>
            <div class="product-content">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-desc">{{ product.desc }}</p>
              <div class="product-tags">
                <span
                  v-for="tag in product.tags"
                  :key="tag"
                  class="tag-item tag-3d"
                  >{{ tag }}</span
                >
              </div>
              <el-button type="danger" text class="view-btn">
                查看详情 →
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us - 选择我们的理由 -->
    <section class="why-section">
      <div class="container">
        <div class="section-head">
          <span class="tag">WHY AGKEY</span>
          <h2 class="title">为什么年轻人都选择战创</h2>
          <p class="desc">因为我们懂你的需求</p>
        </div>

        <div class="why-grid">
          <div
            v-for="(item, index) in whyUs"
            :key="index"
            class="why-card animate-item"
          >
            <div class="why-icon">{{ item.icon }}</div>
            <h3 class="why-title">{{ item.title }}</h3>
            <p class="why-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Story - 品牌态度 -->
    <section class="brand-section">
      <div class="container">
        <div class="brand-grid">
          <div class="brand-text">
            <span class="brand-tag">BRAND STORY</span>
            <h2 class="brand-title">
              年轻人的选择<br />
              不止是产品
            </h2>
            <p class="brand-desc">
              2024年，一群热爱电竞的年轻人创立了战创AGKEY。我们不只是做桌子，
              更是在打造一种生活方式。每一张桌子都承载着对游戏的热爱，
              对品质的追求，对梦想的坚持。
            </p>
            <div class="brand-values">
              <div class="value-item">
                <div class="value-num">35+</div>
                <div class="value-label">研发团队</div>
              </div>
              <div class="value-item">
                <div class="value-num">10万㎡</div>
                <div class="value-label">专属工厂</div>
              </div>
              <div class="value-item">
                <div class="value-num">10年</div>
                <div class="value-label">品质保证</div>
              </div>
            </div>
            <el-button type="danger" size="large" round class="mt-8">
              了解品牌故事
            </el-button>
          </div>

          <div class="brand-visual">
            <div class="visual-grid">
              <div class="visual-box">
                <div class="box-icon">🎮</div>
                <h4>专为电竞打造</h4>
              </div>
              <div class="visual-box">
                <div class="box-icon">⚡</div>
                <h4>极致性价比</h4>
              </div>
              <div class="visual-box">
                <div class="box-icon">🏆</div>
                <h4>品质保证</h4>
              </div>
              <div class="visual-box">
                <div class="box-icon">🔥</div>
                <h4>潮流设计</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services - 服务保障 -->
    <section class="services-section">
      <div class="container">
        <div class="section-head">
          <span class="tag">SERVICES</span>
          <h2 class="title">贴心服务 让你无忧</h2>
        </div>

        <div class="services-grid">
          <div
            v-for="service in services"
            :key="service.name"
            class="service-item animate-item"
          >
            <div class="service-icon">{{ service.icon }}</div>
            <div class="service-name">{{ service.name }}</div>
          </div>
        </div>

        <div class="qr-section">
          <p>手机扫一扫，30秒快速下单</p>
          <div class="qr-code">
            <div class="qr-placeholder">二维码</div>
          </div>
        </div>
      </div>
    </section>

    <!-- News - 品牌资讯 -->
    <section class="news-section">
      <div class="container">
        <div class="section-head">
          <span class="tag">NEWS</span>
          <h2 class="title">品牌资讯</h2>
        </div>

        <div class="news-grid">
          <div
            v-for="item in news"
            :key="item.title"
            class="news-card-modern animate-item"
          >
            <h3 class="news-title">{{ item.title }}</h3>
            <p class="news-excerpt">{{ item.excerpt }}</p>
            <span class="news-link">阅读更多 →</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// 页面元数据
useHead({
  title: "战创AGKEY - 年轻人的选择 | 专业电竞桌品牌",
  meta: [
    {
      name: "description",
      content:
        "战创AGKEY，年轻人的电竞桌选择。专业Z字桌腿设计，10年品质保证，打造你的电竞理想空间。",
    },
  ],
});

// 3D 视差效果
const heroSection = ref(null);
const mouseX = ref(0);
const mouseY = ref(0);
const layerStyle = ref({
  far: {},
  mid: {},
  near: {},
});
const contentStyle = ref({});

// 鼠标移动处理 - 3D视差
const handleMouseMove = (e) => {
  if (!heroSection.value) return;

  const rect = heroSection.value.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  mouseX.value = (x - 0.5) * 2;
  mouseY.value = (y - 0.5) * 2;

  // 不同深度的层移动不同距离
  layerStyle.value = {
    far: {
      transform: `translate(${mouseX.value * 5}px, ${mouseY.value * 5}px)`,
    },
    mid: {
      transform: `translate(${mouseX.value * 15}px, ${mouseY.value * 15}px)`,
    },
    near: {
      transform: `translate(${mouseX.value * 30}px, ${mouseY.value * 30}px)`,
    },
  };

  contentStyle.value = {
    transform: `perspective(1000px) rotateY(${mouseX.value * 2}deg) rotateX(${
      -mouseY.value * 2
    }deg)`,
  };
};

// 卡片3D悬停效果
const handleCardHover = (e) => {
  const card = e.currentTarget;
  card.style.transition = "none";
};

const handleCardMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  const rotateY = (x - 0.5) * 20;
  const rotateX = -(y - 0.5) * 20;

  card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(20px)`;
};

const handleCardLeave = (e) => {
  const card = e.currentTarget;
  card.style.transition = "transform 0.5s ease";
  card.style.transform =
    "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
};

// Apple 风格的滚动触发动画
const observeElements = () => {
  // 配置 Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: "-100px", // 提前触发动画
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5], // 多个阈值，实现渐进动画
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const element = entry.target;
      const ratio = entry.intersectionRatio;

      if (entry.isIntersecting) {
        // 元素进入视口
        element.classList.add("in-view");

        // 为子元素添加渐进式动画
        const children = element.querySelectorAll(".animate-item");
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add("animated");
          }, index * 100); // 每个元素延迟100ms
        });

        // 根据滚动进度调整透明度和位置
        const scale = 0.9 + ratio * 0.1;
        const opacity = Math.min(ratio * 2, 1);
        element.style.transform = `scale(${scale})`;
        element.style.opacity = opacity;
      } else {
        // 元素离开视口时，可选择重置动画
        // element.classList.remove('in-view')
      }
    });
  }, observerOptions);

  // 观察所有需要动画的元素
  const animateSelectors = [
    ".section-head",
    ".product-card-modern",
    ".why-card",
    ".brand-text",
    ".brand-visual",
    ".service-item",
    ".news-card-modern",
  ];

  animateSelectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      el.classList.add("animate-on-scroll");
      observer.observe(el);
    });
  });

  return observer;
};

onMounted(() => {
  // 启动滚动观察
  const observer = observeElements();

  // 清理函数
  onUnmounted(() => {
    observer.disconnect();
  });
});

// 产品数据
const products = [
  {
    id: 1,
    name: "战创·Z字桌腿",
    desc: "S-3系列旗舰产品，极光设计，稳固耐用",
    icon: "🎮",
    badge: "HOT",
    tags: ["Z字腿", "大桌面", "RGB灯效"],
  },
  {
    id: 2,
    name: "智能升降桌",
    desc: "站坐交替，健康办公新选择",
    icon: "⬆️",
    badge: "NEW",
    tags: ["电动升降", "记忆高度", "防撞保护"],
  },
  {
    id: 3,
    name: "专业电竞桌",
    desc: "为职业选手打造的竞技装备",
    icon: "🏆",
    badge: null,
    tags: ["碳纤维", "超大桌面", "理线系统"],
  },
];

// 选择我们的理由
const whyUs = [
  {
    icon: "💰",
    title: "极致性价比",
    desc: "工厂直供，省去中间环节，把实惠给到你",
  },
  {
    icon: "🎯",
    title: "专为电竞",
    desc: "深度研究玩家需求，每个细节都为游戏而生",
  },
  {
    icon: "🔧",
    title: "10年质保",
    desc: "行业领先质保服务，用得放心，玩得安心",
  },
  {
    icon: "🚀",
    title: "快速交付",
    desc: "下单即发货，让你快速拥有理想装备",
  },
  {
    icon: "🎨",
    title: "潮流设计",
    desc: "年轻化设计语言，打造你的个性空间",
  },
  {
    icon: "💪",
    title: "品质保证",
    desc: "ENF级环保板材，35人研发团队护航",
  },
];

// 服务项目
const services = [
  { name: "3期免息", icon: "💳" },
  { name: "送货上门", icon: "🚚" },
  { name: "快速换新", icon: "🔄" },
  { name: "10年质保", icon: "⏰" },
  { name: "7天试用", icon: "📅" },
  { name: "保价服务", icon: "💰" },
  { name: "只换不修", icon: "🔧" },
];

// 新闻资讯
const news = [
  {
    title: "2025新款S-3战创·Z字桌腿震撼发布",
    excerpt: "把极光绘入现实，为年轻玩家打造电竞理想空间。",
  },
  {
    title: "战创AGKEY获ENF板材认证",
    excerpt: "严格把关产品质量，为用户健康保驾护航。",
  },
  {
    title: "35人研发团队，10万㎡工厂投产",
    excerpt: "持续加大研发投入，提升产品竞争力。",
  },
  {
    title: "10年质保服务全面升级",
    excerpt: "行业领先的售后服务，让用户无忧购买。",
  },
];
</script>

<style scoped>
/* Hero Section - 3D增强 */
.hero-section-modern {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #000;
  perspective: 1500px;
  transform-style: preserve-3d;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  transform-style: preserve-3d;
}

/* 3D 背景层 */
.bg-layer {
  position: absolute;
  inset: 0;
  transition: transform 0.3s ease-out;
  will-change: transform;
}

.layer-far {
  z-index: 1;
  transform: translateZ(-100px);
}

.layer-mid {
  z-index: 2;
  transform: translateZ(-50px);
}

.layer-near {
  z-index: 3;
  transform: translateZ(0px);
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(239, 68, 68, 0.15) 0%,
    transparent 70%
  );
  filter: blur(40px);
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
  opacity: 0.5;
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(50px, 50px);
  }
}

/* 3D 几何形状 */
.geometric-shapes {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.shape {
  position: absolute;
  border: 2px solid rgba(239, 68, 68, 0.2);
  animation: float3d 6s ease-in-out infinite;
}

.shape-cube {
  width: 150px;
  height: 150px;
  top: 20%;
  right: 15%;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), transparent);
  backdrop-filter: blur(10px);
  transform: rotate(45deg);
  animation: rotate3d 10s linear infinite;
}

.shape-pyramid {
  width: 0;
  height: 0;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  border-bottom: 130px solid rgba(239, 68, 68, 0.15);
  top: 60%;
  left: 10%;
  filter: blur(2px);
  animation: float3d 8s ease-in-out infinite reverse;
}

.shape-ring {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid rgba(239, 68, 68, 0.2);
  top: 40%;
  right: 25%;
  animation: pulse3d 4s ease-in-out infinite;
}

@keyframes float3d {
  0%,
  100% {
    transform: translateY(0) translateZ(0);
  }

  50% {
    transform: translateY(-30px) translateZ(50px);
  }
}

@keyframes rotate3d {
  0% {
    transform: rotate(0deg) rotateY(0deg);
  }

  100% {
    transform: rotate(360deg) rotateY(360deg);
  }
}

@keyframes pulse3d {
  0%,
  100% {
    transform: scale(1) translateZ(0);
    opacity: 0.3;
  }

  50% {
    transform: scale(1.2) translateZ(30px);
    opacity: 0.6;
  }
}

.hero-container {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 2rem;
  transform-style: preserve-3d;
  transition: transform 0.3s ease-out;
  will-change: transform;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(
    135deg,
    rgba(239, 68, 68, 0.2) 0%,
    rgba(220, 38, 38, 0.2) 100%
  );
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 50px;
  color: #ef4444;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
  backdrop-filter: blur(10px);
}

.floating-3d {
  animation: float3dBadge 3s ease-in-out infinite;
  transform-style: preserve-3d;
}

@keyframes float3dBadge {
  0%,
  100% {
    transform: translateY(0) translateZ(0px);
  }

  50% {
    transform: translateY(-10px) translateZ(30px);
  }
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.hero-title .line-1 {
  font-size: clamp(2rem, 8vw, 5rem);
  font-weight: 900;
  color: white;
  letter-spacing: -0.02em;
}

.hero-title .line-2 {
  font-size: clamp(1.5rem, 6vw, 3.5rem);
  font-weight: 700;
  color: #9ca3af;
}

.hero-title .line-3 {
  font-size: clamp(2rem, 8vw, 5rem);
  font-weight: 900;
  background: linear-gradient(135deg, #ef4444 0%, #f87171 50%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #9ca3af;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

/* 3D 按钮效果 */
.btn-3d {
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
}

.action-primary {
  padding: 1.5rem 3rem !important;
  font-size: 1.125rem !important;
  font-weight: 600 !important;
  box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3),
    0 0 0 1px rgba(239, 68, 68, 0.1) inset;
  transition: all 0.3s ease;
}

.action-primary:hover {
  transform: translateY(-5px) translateZ(20px);
  box-shadow: 0 20px 50px rgba(239, 68, 68, 0.5),
    0 0 0 1px rgba(239, 68, 68, 0.2) inset;
}

.action-primary:active {
  transform: translateY(-2px) translateZ(10px);
}

.action-secondary {
  padding: 1.5rem 3rem !important;
  font-size: 1.125rem !important;
  font-weight: 600 !important;
  background: rgba(255, 255, 255, 0.05) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
  color: white !important;
  backdrop-filter: blur(10px);
}

.action-secondary:hover {
  transform: translateY(-5px) translateZ(20px);
  background: rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

/* 3D 统计卡片 */
.card-3d {
  transform-style: preserve-3d;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
  transition: transform 0.3s ease;
}

.stat:hover {
  transform: translateZ(20px) scale(1.1);
}

.stat-num {
  font-size: 2.5rem;
  font-weight: 900;
  color: #ef4444;
  line-height: 1;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
}

.stat-label {
  font-size: 0.875rem;
  color: #9ca3af;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #9ca3af;
  font-size: 0.75rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}

.mouse-icon {
  width: 24px;
  height: 36px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.wheel {
  width: 3px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  animation: wheel 1.5s infinite;
}

@keyframes wheel {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(12px);
  }
}

/* Products Section */
.products-section {
  padding: 6rem 0;
  background: #0a0a0a;
}

.section-head {
  text-align: center;
  margin-bottom: 4rem;
}

.tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.5rem;
}

.desc {
  font-size: 1.125rem;
  color: #9ca3af;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* 3D 产品卡片 */
.card-3d-hover {
  transform-style: preserve-3d;
  will-change: transform;
}

.product-card-modern {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: visible;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
  position: relative;
}

.product-card-modern::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(239, 68, 68, 0.1) 0%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  border-radius: 16px;
  z-index: -1;
}

.product-card-modern:hover::before {
  opacity: 1;
}

.product-card-modern:hover {
  border-color: rgba(239, 68, 68, 0.5);
  box-shadow: 0 30px 60px rgba(239, 68, 68, 0.3),
    0 0 0 1px rgba(239, 68, 68, 0.1) inset;
}

.product-img {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-placeholder {
  font-size: 4rem;
}

/* 3D 徽章 */
.badge-3d {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(239, 68, 68, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  transform: translateZ(30px);
  animation: pulse3dBadge 2s ease-in-out infinite;
}

@keyframes pulse3dBadge {
  0%,
  100% {
    transform: translateZ(30px) scale(1);
    box-shadow: 0 5px 15px rgba(239, 68, 68, 0.5);
  }

  50% {
    transform: translateZ(40px) scale(1.05);
    box-shadow: 0 10px 25px rgba(239, 68, 68, 0.7);
  }
}

.product-content {
  padding: 1.5rem;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.product-desc {
  color: #9ca3af;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.product-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

/* 3D 标签 */
.tag-3d {
  padding: 0.25rem 0.75rem;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  font-size: 0.75rem;
  border-radius: 4px;
  border: 1px solid rgba(239, 68, 68, 0.2);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  transform: translateZ(10px);
}

.tag-3d:hover {
  background: rgba(239, 68, 68, 0.2);
  transform: translateZ(20px) scale(1.1);
  box-shadow: 0 5px 15px rgba(239, 68, 68, 0.3);
}

.view-btn {
  color: #ef4444 !important;
  font-weight: 600 !important;
}

/* Why Section */
.why-section {
  padding: 6rem 0;
  background: #000;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.why-card {
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
}

.why-card:hover {
  transform: translateY(-5px);
  border-color: rgba(239, 68, 68, 0.5);
}

.why-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.why-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.why-desc {
  color: #9ca3af;
  line-height: 1.6;
}

/* Brand Section */
.brand-section {
  padding: 6rem 0;
  background: #0a0a0a;
}

.brand-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  align-items: center;
}

.brand-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.brand-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: white;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.brand-desc {
  color: #9ca3af;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.brand-values {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.value-item {
  text-align: center;
}

.value-num {
  font-size: 2rem;
  font-weight: 900;
  color: #ef4444;
  margin-bottom: 0.25rem;
}

.value-label {
  font-size: 0.875rem;
  color: #9ca3af;
}

.visual-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.visual-box {
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.visual-box:hover {
  transform: scale(1.05);
  border-color: rgba(239, 68, 68, 0.5);
}

.box-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.visual-box h4 {
  color: white;
  font-weight: 600;
}

/* Services Section */
.services-section {
  padding: 6rem 0;
  background: #000;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.service-item {
  padding: 2rem 1rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.service-item:hover {
  transform: translateY(-5px);
  border-color: rgba(239, 68, 68, 0.5);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.service-name {
  color: white;
  font-weight: 600;
}

.qr-section {
  text-align: center;
  margin-top: 3rem;
}

.qr-section p {
  color: #9ca3af;
  margin-bottom: 1rem;
  font-size: 1.125rem;
}

.qr-code {
  display: inline-block;
  padding: 1rem;
  background: white;
  border-radius: 12px;
}

.qr-placeholder {
  width: 150px;
  height: 150px;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-weight: 600;
}

/* News Section */
.news-section {
  padding: 6rem 0;
  background: #0a0a0a;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.news-card-modern {
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.news-card-modern:hover {
  transform: translateY(-5px);
  border-color: rgba(239, 68, 68, 0.5);
}

.news-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.news-excerpt {
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.news-link {
  color: #ef4444;
  font-weight: 600;
  font-size: 0.875rem;
}

/* Apple 风格滚动触发动画 */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(60px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.animate-on-scroll.in-view {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* 列表项渐进式动画 */
.animate-item {
  opacity: 0;
  transform: translateY(40px) scale(0.9);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-item.animated {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Section标题动画增强 */
.section-head.in-view .tag {
  animation: slideInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.section-head.in-view .title {
  animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
}

.section-head.in-view .desc {
  animation: fadeIn 0.8s ease-out 0.2s forwards;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* 产品卡片特殊进场动画 */
.product-card-modern.animate-item {
  transform: translateY(60px) scale(0.9) rotateX(10deg);
}

.product-card-modern.animate-item.animated {
  transform: translateY(0) scale(1) rotateX(0deg);
}

/* Why卡片旋转进场 */
.why-card.animate-item {
  transform: translateY(40px) scale(0.8) rotateY(-15deg);
  opacity: 0;
}

.why-card.animate-item.animated {
  transform: translateY(0) scale(1) rotateY(0deg);
  opacity: 1;
}

/* 服务卡片弹性进场 */
.service-item.animate-item {
  transform: translateY(30px) scale(0.7);
  opacity: 0;
}

.service-item.animate-item.animated {
  transform: translateY(0) scale(1);
  opacity: 1;
  animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes bounceIn {
  0% {
    transform: scale(0.7) translateY(30px);
  }

  50% {
    transform: scale(1.05) translateY(-5px);
  }

  100% {
    transform: scale(1) translateY(0);
  }
}

/* 新闻卡片滑动进场 */
.news-card-modern.animate-item:nth-child(odd) {
  transform: translateX(-60px) translateY(20px);
  opacity: 0;
}

.news-card-modern.animate-item:nth-child(even) {
  transform: translateX(60px) translateY(20px);
  opacity: 0;
}

.news-card-modern.animate-item.animated {
  transform: translateX(0) translateY(0);
  opacity: 1;
}

/* 视觉盒子动画 */
.visual-box {
  opacity: 0;
  transform: scale(0.8) rotateZ(-5deg);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.brand-visual.in-view .visual-box {
  opacity: 1;
  transform: scale(1) rotateZ(0deg);
}

.brand-visual.in-view .visual-box:nth-child(1) {
  transition-delay: 0.1s;
}

.brand-visual.in-view .visual-box:nth-child(2) {
  transition-delay: 0.2s;
}

.brand-visual.in-view .visual-box:nth-child(3) {
  transition-delay: 0.3s;
}

.brand-visual.in-view .visual-box:nth-child(4) {
  transition-delay: 0.4s;
}

/* 品牌文字区域动画 */
.brand-text.in-view .brand-tag {
  animation: slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.brand-text.in-view .brand-title {
  animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
}

.brand-text.in-view .brand-desc {
  animation: fadeIn 0.8s ease-out 0.2s forwards;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-stats {
    gap: 1rem;
  }

  .stat-divider {
    display: none;
  }

  .brand-values {
    flex-direction: column;
    gap: 1rem;
  }

  .visual-grid {
    grid-template-columns: 1fr;
  }
}
</style>
