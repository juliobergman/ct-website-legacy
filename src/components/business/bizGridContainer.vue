<template>
  <div class="row q-col-gutter-x-md q-col-gutter-y-md">
    <biz-thumbnail v-for="biz in business" :key="biz.id" :business="biz" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();

const props = defineProps({
  business: {},
});

const business = computed(() => props.business);
</script>
