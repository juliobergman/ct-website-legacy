<template>
  <q-btn unelevated :color="color" no-caps>
    <div class="flex items-center">
      {{ label }}
      <q-icon
        v-if="icon ? true : false"
        class="q-ml-sm"
        size="18px"
        :name="icon"
      />
    </div>
    <q-tooltip v-if="tooltip">
      {{ tooltip }}
    </q-tooltip>
  </q-btn>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "Standard Button",
  },
  icon: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    default: false,
  },
  tooltip: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "primary-button",
  },
});

const label = computed(() => props.label);
const icon = computed(() => props.icon);
const active = computed(() => props.active);
const tooltip = computed(() => props.tooltip);

const btnColor = computed(() => {
  if (props.active) return "active-button";
  if (props.color) return props.color;
  return "toolbar-button";
});
</script>
