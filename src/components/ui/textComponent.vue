<template>
  <component
    :is="tag"
    v-for="(c, idx) in label"
    :key="idx"
    :style="'opacity: ' + opacity"
    :class="cssClass"
  >
    {{ c }}
  </component>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "body2",
  },
  weight: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  class: {
    type: String,
    default: "",
  },
  opacity: {
    type: Number,
    default: 1,
  },
  shadowed: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Number,
    default: null,
  },
  spacer: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: "span",
  },
});

const tag = computed(() => props.tag);
const content = computed(() =>
  props.spacer ? props.content + " " : props.content
);

const label = computed(() => props.content.toString().split("\n"));

const opacity = computed(() => props.opacity);

const cssClass = computed(() => {
  let cls = "text-" + props.text;
  if (props.weight) cls += " " + "text-weight-" + props.weight;
  if (props.color) cls += " " + "text-" + props.color;
  if (props.class) cls += " " + props.class;
  if (props.shadowed === true) cls += " text-shadow-1";
  if (props.shadow) cls += " text-shadow-" + props.shadow;

  return cls;
});
</script>

<!--

Text Style

text-h1
text-h2
text-h3
text-h4
text-h5
text-h6
text-subtitle1
text-subtitle2
text-body1
text-body2
text-caption
text-overline

Text Weight

thin
light
regular
medium
bold
bolder

-->
