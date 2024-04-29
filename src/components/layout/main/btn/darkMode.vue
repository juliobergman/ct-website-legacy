<template>
  <q-btn
    v-if="showBtn"
    flat
    round
    :icon="darkmode ? 'light_mode' : 'brightness_3'"
    @click="toggleDarkMode"
  />
  <q-item clickable v-if="showItem" @click="toggleDarkMode">
    <q-item-section>DarkMode</q-item-section>
    <q-item-section side>
      <!-- <q-icon :name="darkmode ? 'light_mode' : 'brightness_3'" /> -->
      <q-toggle v-model="darkmode" />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();

const props = defineProps({
  modelValue: {},
  listItem: {
    type: Boolean,
    default: false,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
});

const $emit = defineEmits("update:modelValue");
const hidden = computed(() => props.hidden);
const listItem = computed(() => props.listItem);

const showBtn = computed(() => {
  if (props.hidden) return false;
  if (props.listItem) return false;
  return true;
});
const showItem = computed(() => {
  if (props.hidden) return false;
  if (!props.listItem) return false;
  return true;
});

if ($q.cookies.has("dark_mode")) {
  $q.dark.set(JSON.parse($q.cookies.get("dark_mode")));
} else {
  $q.dark.set("auto");
}

const darkmode = computed({
  get: () => $q.dark.isActive,
  set: (val) => {
    $q.dark.set(val);
    $q.cookies.set("dark_mode", $q.dark.isActive, { path: "/" });
    // $emit("update:modelValue", val);
  },
});

function toggleDarkMode() {
  darkmode.value = !darkmode.value;
  // $q.dark.set(!darkmode.value);
  // $q.cookies.set("dark_mode", $q.dark.isActive, { path: "/" });
}
</script>
