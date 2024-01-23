<template>
  <div class="row q-col-gutter-md">
    <div class="col-6 col-sm-4 col-md-2" v-for="m in media" :key="m.id">
      <ct-thumb :image="m" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  media: {},
});

const media = computed(() => props.media);
</script>
