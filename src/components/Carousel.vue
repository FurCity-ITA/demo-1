<template>
  <section
    class="relative w-full overflow-hidden rounded-xl"
    :class="heightClass"
    aria-roledescription="carousel"
  >
    <!-- Slides -->
    <div class="w-full h-full">
      <TransitionGroup name="slide-fade" tag="div" class="w-full h-full">
        <img
          v-for="(slide, idx) in activeSlides"
          v-show="idx === current"
          :key="idx"
          :src="slide.src"
          :alt="slide.alt || 'carousel image'"
          class="w-full h-full object-cover absolute inset-0"
        />
      </TransitionGroup>
    </div>

    <!-- Overlay content (title / subtitle / countdown) -->
    <div class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 pointer-events-none">
      <h2 v-if="currentSlide.title" class="text-xl md:text-3xl font-bold text-white mb-1 drop-shadow">
        {{ $t(currentSlide.title) }}
      </h2>
      <p v-if="currentSlide.subtitle" class="text-sm md:text-base text-white/90 mb-1 drop-shadow">
        {{ $t(currentSlide.subtitle) }}
      </p>
      <!-- Countdown -->
      <div v-if="currentSlide.countdown" class="text-lg font-semibold text-yellow-300 drop-shadow">
        {{ countdownString }}
      </div>
    </div>

    <!-- Prev / Next -->
    <button
      class="nav-btn left-4"
      @click="prev"
      aria-label="Previous slide"
    >
      ‹
    </button>
    <button
      class="nav-btn right-4"
      @click="next"
      aria-label="Next slide"
    >
      ›
    </button>

    <!-- Dots -->
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
      <span
        v-for="(slide, index) in activeSlides"
        :key="index"
        class="w-2.5 h-2.5 rounded-full cursor-pointer"
        :class="current === index ? 'bg-white' : 'bg-white/40'"
        @click="go(index)"
        aria-label="Go to slide"
      ></span>
    </div>

    <!-- Announcement ticker (global) -->
    <div
      v-if="announcements && announcements.length"
      class="absolute top-2 left-1/2 -translate-x-1/2 w-full max-w-6xl overflow-hidden"
    >
      <div
        class="animate-marquee whitespace-nowrap text-sm md:text-base text-yellow-200 font-medium"
      >
        <span v-for="(msg, i) in announcements" :key="i" class="mx-4">
          {{ $t(msg) }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

// Props ---------------------------------------------------
const props = defineProps({
  slides: { type: Array, default: () => [] }, // preferred [{src, alt, title, subtitle, countdown:"ISO"}]
  images: { type: Array, default: null }, // legacy support: ["/img1.jpg", "/img2.jpg"]
  announcements: { type: Array, default: () => [] },
  autoPlay: { type: Boolean, default: true },
  interval: { type: Number, default: 5000 },
  height: {
    type: String,
    default: 'md', // 'sm' | 'md' | 'lg'
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  }
});

useI18n();

// Merge legacy images into slide objects -----------------
const activeSlides = computed(() => {
  if (props.slides && props.slides.length) return props.slides;
  if (props.images && props.images.length)
    return props.images.map((src) => ({ src }));
  return [];
});

if (import.meta.env.DEV && !activeSlides.value.length) {
  console.warn('[Carousel] No slides or images provided');
}

// State ---------------------------------------------------
const current = ref(0);
let intervalId = null;

const heightClass = computed(() => {
  switch (props.height) {
    case 'sm':
      return 'h-[240px] md:h-[240px] lg:h-[240px]';
    case 'lg':
      return 'h-[480px] md:h-[480px] lg:h-[480px]';
    default:
      return 'h-[360px] md:h-[360px] lg:h-[360px]';
  }
});

const next = () => {
  if (!activeSlides.value.length) return;
  current.value = (current.value + 1) % activeSlides.value.length;
};
const prev = () => {
  if (!activeSlides.value.length) return;
  current.value = (current.value - 1 + activeSlides.value.length) % activeSlides.value.length;
};
const go = (idx) => (current.value = idx);

// Auto-play ------------------------------------------------
const startAuto = () => {
  if (props.autoPlay && activeSlides.value.length > 1) {
    intervalId = setInterval(next, props.interval);
  }
};
const stopAuto = () => clearInterval(intervalId);

onMounted(startAuto);
onUnmounted(stopAuto);

watch(() => props.autoPlay, () => {
  stopAuto();
  startAuto();
});

// Countdown ----------------------------------------------
const currentSlide = computed(() => activeSlides.value[current.value] || {});

const countdownString = ref('');
let countdownTimer = null;

const updateCountdown = () => {
  const target = currentSlide.value.countdown;
  if (!target) return (countdownString.value = '');
  const now = new Date();
  const end = new Date(target);
  const diff = end - now;
  if (diff <= 0) return (countdownString.value = '00:00:00');
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  countdownString.value =
    (d ? d + 'd ' : '') +
    String(h).padStart(2, '0') + ':' +
    String(m).padStart(2, '0') + ':' +
    String(s).padStart(2, '0');
};

onMounted(() => {
  updateCountdown();
  countdownTimer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => clearInterval(countdownTimer));

watch(currentSlide, updateCountdown);
</script>

<style scoped>
.nav-btn {
  @apply absolute top-1/2 -translate-y-1/2 bg-white/70 text-gray-700 px-2 py-1 rounded hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
/* Marquee animation */
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.animate-marquee {
  animation: marquee 20s linear infinite;
}
</style>