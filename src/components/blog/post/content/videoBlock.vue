<template>
  <div>
    <q-video class="rounded-borders" :src="media.video_url" :ratio="16 / 9" />
  </div>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";

const $q = useQuasar();

const props = defineProps({
  modelValue: {},
});

const media = computed(() => props.modelValue);
</script>
