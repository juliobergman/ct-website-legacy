<template>
  <div class="full-width">
    <q-carousel
      animated
      swipeable
      thumbnails
      arrows
      infinite
      :fullscreen="fullscreen"
      :height="galHeight"
      v-model="slide"
      class="bg-dark"
    >
      <template #control>
        <q-carousel-control position="top-right" :offset="[0, 0]">
          <q-btn
            v-if="fullscreen"
            fab
            flat
            icon="fullscreen_exit"
            @click="fullscreen = false"
          />
          <q-btn v-else fab flat icon="fullscreen" @click="fullscreen = true" />
        </q-carousel-control>
      </template>
      <q-carousel-slide
        class="q-pa-none"
        v-for="(m, idx) in media"
        :key="m.id"
        :name="idx"
        :img-src="m.src"
      >
        <q-img
          :fit="fitMode"
          :height="galHeight"
          :src="m.src"
          :srcset="m.srcset"
          @click="toggleFitMode"
        />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";

const props = defineProps({
  media: {},
});

const $q = useQuasar();
const media = computed(() => props.media);
const $mobile = computed(() => ($q.platform.is.mobile ? true : false));

let slide = ref(0);
let fullscreen = ref(false);
let fitMode = ref("contain");

const galHeight = computed(() => {
  if (fullscreen.value) return $q.screen.height + "px";
  if ($mobile.value) return $q.screen.height * 0.9 + "px";
  return "600px";
});

function toggleFitMode() {
  console.log("askdbj");
  if (fitMode.value == "contain") {
    fitMode.value = "cover";
  } else if (fitMode.value == "cover") {
    fitMode.value = "contain";
  }
}
</script>
<style scoped>
.q-carousel__slide {
  background-image: none !important;
  /* background-color: #121212; */
}
</style>
