<template>
  <!-- color="primary-button" -->
  <!-- :text-color="dark ? 'white' : 'primary-button'" -->
  <q-btn
    v-if="!hidden"
    flat
    round
    :icon="darkmode ? 'light_mode' : 'brightness_3'"
    @click="toggleDarkMode"
  />
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { useAppStore } from "stores/app";
const $q = useQuasar();
const $store = useAppStore();

const props = defineProps({
  hidden: {
    type: Boolean,
    default: false,
  },
});
const hidden = computed(() => props.hidden);
const darkmode = computed(() => $q.dark.isActive);
function toggleDarkMode() {
  $store.setDarkMode(!$q.dark.isActive);
  // $store.setDarkMode();
}
</script>
