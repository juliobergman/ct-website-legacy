<template>
  <q-dialog
    v-model="open"
    transition-show="slide-up"
    transition-hide="slide-down"
    maximized
    @hide="hide"
    class="image-container-fullscreen"
    no-route-dismiss
  >
    <q-carousel
      fullscreen
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      swipeable
      infinite
      ref="refCarousel"
      arrows
      thumbnails
      class="ct-carousel-dialog"
    >
      <q-carousel-slide
        v-for="image in list"
        :key="image.id"
        :name="image.id"
        class="q-pa-none"
        :img-src="image.src"
      >
        <ct-image
          fullscreen
          :image="image"
          v-model:fit="fit"
          @media:click="handleClick"
        />
      </q-carousel-slide>

      <template #control v-if="true">
        <q-carousel-control position="top-right" :offset="[10, 10]">
          <q-btn
            icon="close"
            fab
            padding="xs"
            @click="open = false"
            v-close-popup
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </q-dialog>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";
import { api } from "boot/axios";
import { useQuasar } from "quasar";

const $q = useQuasar();
const $router = useRouter();
const $mobile = computed(() => ($q.platform.is.mobile ? true : false));

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  list: {},
  slide: {},
  next: {},
});
const $emit = defineEmits([
  "update:modelValue",
  "update:slide",
  "click:edit",
  "swipe:left",
  "swipe:right",
]);

const list = computed(() => props.list);

let fit = ref("contain");
let refCarousel = ref(null);

const open = computed({
  get: () => props.modelValue,
  set: (val) => $emit("update:modelValue", val),
});

const slide = computed({
  get: () => props.slide,
  set: (val) => $emit("update:slide", val),
});

function handleClick() {
  if (fit.value === "cover") fit.value = "contain";
  else fit.value = "cover";
}

watch(
  () => props.next,
  () => {
    refCarousel.value.next();
  }
);

function hide() {}

function handleKeys(e) {
  if (!open.value) return;
  if (e.key == "ArrowRight") {
    refCarousel.value.next();
    return;
  }
  if (e.key == "ArrowLeft") {
    refCarousel.value.previous();
    return;
  }
  if (e.key == "ArrowUp") {
    handleClick();
    return;
  }
  if (e.key == "z") {
    handleClick();
    return;
  }
  if (e.key == "ArrowDown") {
    open.value = false;
    return;
  }
}

onMounted(() => {
  window.addEventListener("keyup", (evt) => {
    handleKeys(evt);
    return;
  });
});
onUnmounted(() => {
  // window.removeEventListener("keyup");
});
</script>
