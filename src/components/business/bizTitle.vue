<template>
  <div class="full-width q-gutter-none q-px-md">
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
});

const business = computed(() => props.bizData);
</script>
