<template>
  <div>
    <grid-gallery
      v-if="content.gallery_type === 'grid'"
      :media="content.gallery.media"
    />
    <post-gallery-carousel
      v-if="content.gallery_type === 'carousel'"
      :media="content.gallery.media"
    />
  </div>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const props = defineProps({
  modelValue: {},
});

const content = computed(() => props.modelValue);
</script>
