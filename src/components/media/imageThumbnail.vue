<template>
  <q-card :class="cardClass" flat :style="imageStyle" v-ripple>
    <q-img
      ref="image"
      :ratio="ratio"
      :src="img.src"
      :srcset="img.srcset"
      @load="setupImage"
    />
  </q-card>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  image: {},
  class: {},
  ratio: {
    type: Number,
    default: 1 / 1,
  },
});

let image = ref(null);
let imageStyle = ref("");

const img = computed(() => props.image);
const ratio = computed(() => props.ratio);

const cardClass = computed(() => {
  let c = "media-thumbnail q-ma-none q-pa-none cursor-pointer";
  if (props.class) c += " " + props.class;
  return c;
});

// Container Resize
function setupImage() {
  imageStyle.value = "height: " + image.value.$el.clientHeight + "px";
}
onMounted(() => {
  window.addEventListener(
    "resize",
    () => {
      if (image.value) {
        imageStyle.value = "height: " + image.value.$el.clientHeight + "px";
      }
      return;
    },
    true
  );
});
</script>
