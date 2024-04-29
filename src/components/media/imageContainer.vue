<template>
  <q-card flat :class="cardClass" :style="imageStyle">
    <q-img
      v-if="src"
      img-class="image"
      ref="image"
      :src="src"
      :fit="fit"
      :height="fullscreen ? imgHeight : null"
      @load="setupImage"
      @click="handleClick"
      :ratio="ratio"
    >
    </q-img>
    <q-img
      v-else
      img-class="image"
      ref="image"
      :src="img.src"
      :srcset="img.srcset"
      :fit="fit"
      :height="fullscreen ? imgHeight : null"
      @load="setupImage"
      @click="handleClick"
      :ratio="ratio"
    >
    </q-img>
  </q-card>
</template>

<script setup>
import { ref, computed, onMounted, handleError } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const $mobile = computed(() => ($q.platform.is.mobile ? true : false));

const props = defineProps({
  image: {},
  ratio: {},
  src: {
    type: String,
    default: null,
  },
  fit: {
    type: String,
    default: "contain",
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
});

const $emit = defineEmits(["media:click"]);
const imgHeight = computed(() => $q.screen.height + "px");

let image = ref(null);
let imageStyle = ref("");

const src = computed(() => props.src);
const img = computed(() => props.image);
const fit = computed(() => props.fit);
const ratio = computed(() => props.ratio);

const cardClass = computed(() => {
  let c = "bg-dark";
  if (props.class) c += " " + props.class;
  if (props.fullscreen) c += " image-container-fullscreen";
  return c;
});

function handleClick() {
  $emit("media:click", props.image);
}

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
