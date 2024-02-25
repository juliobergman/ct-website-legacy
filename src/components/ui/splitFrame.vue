<template>
  <div :class="splitCss">
    <!-- Left Side -->
    <div v-if="!hideLeft" :class="hideRight ? 'col-12' : 'col-12 col-md-9'">
      <div :class="lcss">
        <slot name="left"></slot>
      </div>
    </div>
    <!-- Right Side -->
    <div v-if="!hideRight" :class="hideLeft ? 'col-12' : 'col-12 col-md-3'">
      <div :class="rcss">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watchEffect } from "vue";
import { api } from "boot/axios";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useAppStore } from "stores/app";

const $q = useQuasar();
const $mobile = computed(() => ($q.platform.is.mobile ? true : false));
const $router = useRouter();
const $store = useAppStore();
const dark = computed(() => $q.dark.isActive);

const props = defineProps({
  gutter: {
    type: Boolean,
    default: false,
  },
  verticalGutter: {
    type: Boolean,
    default: false,
  },
  leftVerticalGutter: {
    type: Boolean,
    default: false,
  },
  rightVerticalGutter: {
    type: Boolean,
    default: false,
  },
  padding: {
    type: Boolean,
    default: false,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  paddingLeft: {
    type: Boolean,
    default: false,
  },
  paddingRight: {
    type: Boolean,
    default: false,
  },
  fixedPage: {
    type: Boolean,
    default: false,
  },
  hideRight: {
    type: Boolean,
    default: false,
  },
  hideLeft: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  separator: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: "",
  },
  leftClass: {
    type: String,
    default: "",
  },
  rightClass: {
    type: String,
    default: "",
  },
});

const hideRight = computed(() => props.hideRight);
const hideLeft = computed(() => props.hideLeft);

const splitCss = computed(() => {
  let c = $mobile.value ? "column" : "row";
  if (props.fixedPage) c += " split-with-fixed-toolbar";
  if (props.reverse) c += " reverse";
  // if (props.gutter) c += " q-gutter-x-md";
  if (props.gutter) c += " q-col-gutter-x-md";
  if (props.class) c += " " + props.class;
  return c;
});

const lcss = computed(() => {
  let c = "";
  if (props.leftVerticalGutter || props.verticalGutter)
    c += " column q-gutter-y-md";
  if ((props.paddingLeft || props.padding) && props.reverse)
    c += $mobile.value ? " q-pt-md q-px-md" : " q-pt-md q-pr-md";
  if ((props.paddingLeft || props.padding) && !props.reverse)
    c += $mobile.value ? " q-pt-md q-px-md" : " q-pt-md q-pl-md";
  if (props.leftClass) c += " " + props.leftClass;
  return c;
});

const rcss = computed(() => {
  let c = "";
  if (props.rightVerticalGutter || props.verticalGutter)
    c += " column  q-gutter-y-md";
  if ((props.paddingRight || props.padding) && props.reverse)
    c += $mobile.value ? " q-pt-md q-px-md" : " q-pt-md q-pl-md";
  if ((props.paddingRight || props.padding) && !props.reverse)
    c += $mobile.value ? " q-pt-md q-px-md" : " q-pt-md q-pr-md";
  if (props.rightClass) c += " " + props.rightClass;
  return c;
});
</script>
