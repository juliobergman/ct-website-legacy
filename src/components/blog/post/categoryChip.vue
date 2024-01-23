<template>
  <q-chip
    :class="first ? 'q-ml-none' : ''"
    outline
    square
    dense
    clickable
    :color="hvr ? 'primary-chip' : 'secondary-chip'"
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
  first: {
    type: Boolean,
    default: false,
  },
});

const category = computed(() => props.category);
const first = computed(() => props.first);
const label = computed(() => props.category.name);
let hvr = ref(false);
function handleClick() {
  $router.push({
    name: "blog-category",
    params: { category: props.category.id },
  });
}
</script>
