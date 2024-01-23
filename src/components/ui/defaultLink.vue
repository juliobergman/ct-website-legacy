<template>
  <router-link v-if="to" :class="linkClass" :to="to" :target="target">
    <span v-if="label">
      {{ label }}
    </span>
    <slot v-else />
  </router-link>
  <a v-else-if="href" :class="linkClass" :href="href" :target="target">
    <slot />
  </a>
  <span v-else :class="'cursor-pointer ' + linkClass">
    <slot />
  </span>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();

const props = defineProps({
  to: {},
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String,
    default: "_self",
  },
  color: {
    type: String,
    default: "active",
  },
  class: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  weight: {
    type: String,
    default: "medium",
  },
});

const to = computed(() => (props.to ? props.to : false));
const href = computed(() => (props.href ? props.href : false));

const label = computed(() => props.label);
const target = computed(() => props.target);
const color = computed(() => props.color);

const linkClass = computed(() => {
  let c = "link";
  if (props.class) c += " " + props.class;
  if (props.color) c += " text-" + props.color;
  if (props.weight) c += " text-weight-" + props.weight;
  return c;
});
</script>
<style scoped>
.link,
.link::before,
.link::after {
  opacity: 0.95;
  text-decoration: none;
  color: inherit;
}
.link:hover {
  opacity: 1;
  text-decoration: underline;
}
</style>
<style lang="sass" scoped>
.primary
  color: $primary
.secondary
  color: $secondary
.accent
  color: $accent
.dark
  color: $dark
.positive
  color: $positive
.negative
  color: $negative
.info
  color: $info
.warning
  color: $warning
</style>
