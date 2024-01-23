<template>
  <div>
    <post-block-text v-if="block.type === 'text'" v-model="block" />
    <post-block-image v-if="block.type === 'image'" v-model="block" />
    <post-block-table v-if="block.type === 'table'" v-model="block" />
    <post-block-gallery v-if="block.type === 'gallery'" v-model="block" />
    <post-block-video v-if="block.type === 'video'" v-model="block" />
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";

const $q = useQuasar();
const $mobile = computed(() => ($q.platform.is.mobile ? true : false));

const props = defineProps({
  block: {},
  options: {
    type: Array,
  },
  editor: {
    type: Boolean,
    default: false,
  },
  preview: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: "",
  },
});

const $emit = defineEmits([
  "update:modelValue",
  "click:delete",
  "click:down",
  "click:up",
]);

const block = computed({
  get: () => props.block,
  set: (val) => $emit("update:block", val),
});
const editor = computed(() => props.editor);
const preview = computed(() => props.preview);
const options = computed(() => props.options);
const cssClass = computed(() => {
  let c = "";
  if (!props.preview) c += "post-block";
  if (props.preview) c += "post-block-preview";
  if (props.class) c += props.class;
  return c;
});

let menuOpen = ref(false);
let draggin = ref(false);
let addImageDialog = ref(false);
let removeBlockDialog = ref(false);

function selectBlockType(type) {
  block.value.type = type;
}
function updateImage(payload) {
  if (payload) {
    block.value.image_id = payload.id;
    block.value.image_ratio = payload.ratio;
    block.value.image = payload;
  } else {
    block.value.image_id = null;
    block.value.image = null;
  }
}
function updateRatio(payload) {
  block.value.image_ratio = payload;
}

function setGalleryType(type) {
  block.value.gallery_type = type;
}
</script>
<style lang="scss" scoped>
.post-block {
  outline: none;
}
</style>
