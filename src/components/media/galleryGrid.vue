<template>
  <div class="row q-col-gutter-md">
    <div class="col-6 col-sm-4 col-md-2" v-for="m in media" :key="m.id">
      <ct-thumb :image="m" @media:click="handleClick" />
    </div>
  </div>
  <media-carousel-dialog v-model="dialog" v-model:slide="slide" :list="media" />
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  media: {},
});

let dialog = ref(false);
let slide = ref(null);

const media = computed(() => props.media);

function handleClick(payload) {
  slide.value = payload.id;
  dialog.value = true;
}
</script>
