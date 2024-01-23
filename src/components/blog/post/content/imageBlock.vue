<template>
  <div :style="imageStyle" v-if="!img.parallax">
    <q-img
      ref="image"
      :src="img.image.src"
      img-class="rounded-borders"
      :ratio="getRatio"
      @load="setupImage"
    />
  </div>
  <div v-else>
    <q-parallax :speed="9 / 16" scroll-target=".scroll" :src="img.image.src" />
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

const img = computed(() => props.modelValue);

const getRatio = computed(() => {
  let r = props.modelValue.image_ratio
    ? props.modelValue.image_ratio.split(":")
    : [16, 9];
  return JSON.parse(r[0]) / JSON.parse(r[1]);
});

let image = ref(null);
let imageStyle = ref("");
let hover = ref(false);

function itemClick() {
  $emit("click", props.album);
}

// Event Listeners
function setupImage() {
  imageStyle.value = "height: " + image.value.$el.clientHeight + "px";
}
onMounted(() => {
  window.addEventListener(
    "resize",
    (evt) => {
      if (image.value) {
        imageStyle.value = "height: " + image.value.$el.clientHeight + "px";
      }
      return;
    },
    true
  );
});
</script>
<style lang="scss"></style>
