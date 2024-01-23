<template>
  <q-card flat :class="cardClass" :style="imageStyle">
    <q-img
      ref="image"
      :ratio="1 / 1"
      :src="img.src"
      :srcset="img.srcset"
      @load="setupImage"
    >
      {{ cardClass }}
    </q-img>
  </q-card>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  image: {},
});

let image = ref(null);
let imageStyle = ref("");

const img = computed(() => props.image);

const cardClass = computed(() => {
  let c = "media-thumbnail col-4 bg-dark";
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
