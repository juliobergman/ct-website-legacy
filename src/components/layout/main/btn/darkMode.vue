<template>
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
const $q = useQuasar();

const props = defineProps({
  hidden: {
    type: Boolean,
    default: false,
  },
});
const hidden = computed(() => props.hidden);

if ($q.cookies.has("dark_mode")) {
  $q.dark.set(JSON.parse($q.cookies.get("dark_mode")));
} else {
  $q.dark.set("auto");
}

const darkmode = computed(() => $q.dark.isActive);
function toggleDarkMode() {
  $q.dark.set(!darkmode.value);
  $q.cookies.set("dark_mode", $q.dark.isActive, { path: "/" });
}
</script>
