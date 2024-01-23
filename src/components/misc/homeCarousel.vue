<template>
  <div class="full-width">
    <q-carousel
      v-model="slide"
      :swipeable="$mobile"
      autoplay
      animated
      infinite
      arrows
      :transition-prev="$mobile ? 'slide-right' : 'slide-down'"
      :transition-next="$mobile ? 'slide-left' : 'slide-up'"
      :vertical="!$mobile"
      padding
      :height="$mobile ? '85vh' : '90vh'"
      :thumbnails="!$mobile"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
        class="column no-wrap flex justify-center justify-md-end items-center"
      >
        <q-icon name="style" color="white" size="56px" />
        <div class="q-mt-md text-center text-white">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />
    </q-carousel>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();

const $mobile = computed(() => $q.platform.is.mobile);
let slide = ref(1);
</script>
