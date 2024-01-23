<template>
  <div class="row">
    <div class="text-block" v-html="text.body" />
  </div>
</template>

<script setup>
import { computed, watchEffect } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";

const $q = useQuasar();

const props = defineProps({
  modelValue: {},
});

const text = computed(() => props.modelValue);
</script>
