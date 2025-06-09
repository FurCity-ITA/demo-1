<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to || undefined"
    class="group block w-full h-full p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-500 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
    role="button"
    tabindex="0"
    :aria-label="$t(title)"
    @click="navigate"
    @keydown.enter="navigate"
    @keydown.space.prevent="navigate"
  >
    <div class="flex items-center gap-4">
      <!-- Icon circle -->
      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-2xl group-hover:bg-blue-100 transition select-none"
      >
        {{ icon }}
      </div>
      <!-- Text -->
      <div class="flex flex-col">
        <h3
          class="text-base font-semibold text-gray-800 group-hover:text-blue-700"
        >
          {{ $t(title) }}
        </h3>
        <p
          v-if="desc"
          class="text-sm text-gray-500 leading-snug mt-0.5"
        >
          {{ $t(desc) }}
        </p>
      </div>
    </div>
  </component>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  icon: { type: String, default: '' },
  title: { type: String, required: true },
  desc: { type: String, default: '' },
  to: { type: String, default: '' }
});

useI18n();
const router = useRouter();

const navigate = () => {
  if (props.to) router.push(props.to);
};
</script>

<style scoped></style>