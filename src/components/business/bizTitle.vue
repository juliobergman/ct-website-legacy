<template>
  <div v-if="minimal" class="full-width q-gutter-none q-mb-md">
    <div class="row">
      <h1 class="text-shadow-1 text-h5 text-weight-medium q-pa-none q-ma-none">
        {{ business.name }}
      </h1>
    </div>
    <div class="row" style="opacity: 0.8">
      <h2
        class="text-shadow-1 text-subtitle1 text-weight-light q-pa-none q-ma-none"
      >
        {{ business.info }}
      </h2>
    </div>
  </div>
  <div v-else class="full-width q-gutter-none q-px-md">
    <div class="row q-my-sm">
      <biz-chip
        title
        v-for="(cat, idx) in business.categories"
        :key="cat.id"
        :category="cat"
        :first="idx === 0 ? true : false"
      />
    </div>
    <div class="row">
      <h1 class="post-title text-shadow-1 text-h3 q-pa-none q-ma-none">
        {{ business.name }}
      </h1>
    </div>
    <div class="row">
      <h2 class="post-subtitle text-shadow-1 text-h6 q-pa-none q-ma-none">
        <span class="post-title-span">
          {{ business.info }}
        </span>
      </h2>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const $mobile = computed(() => ($q.platform.is.mobile ? true : false));

const props = defineProps({
  bizData: {},
  minimal: {
    type: Boolean,
    default: false,
  },
});

const business = computed(() => props.bizData);
const minimal = computed(() => props.minimal);
</script>
