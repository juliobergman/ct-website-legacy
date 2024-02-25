<template>
  <q-chip
    :class="first ? 'q-ml-none' : ''"
    :outline="!filled"
    :dark="filled"
    square
    dense
    clickable
    :color="hvr ? 'primary-chip' : standByColor"
    @mouseover="hvr = true"
    @mouseleave="hvr = false"
    @click="handleClick"
  >
    {{ label }}
  </q-chip>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();

const props = defineProps({
  category: {},
  filled: {
    type: Boolean,
    default: false,
  },
  first: {
    type: Boolean,
    default: false,
  },
  title: {
    type: Boolean,
    default: false,
  },
});

const category = computed(() => props.category);
const first = computed(() => props.first);
const label = computed(() => props.category.name);
const filled = computed(() => props.filled);
let hvr = ref(false);

const standByColor = computed(() => {
  let color = "primary-chip";
  if (props.filled) color = "red";
  if (props.title) color = "grey-3";
  return color;
});

function handleClick() {
  $router.push({
    name: "business-category",
    params: { category: props.category.id },
  });
}
</script>
