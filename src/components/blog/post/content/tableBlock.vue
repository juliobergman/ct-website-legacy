<template>
  <div>
    <div class="q-mb-md"></div>
    <q-card bordered flat class="post-table">
      <q-card-section v-if="content.table_title ? true : false" class="q-pa-sm">
        <d-text text="subtitle2" :content="content.table_title" />
      </q-card-section>
      <q-separator v-if="content.table_title ? true : false" />
      <q-table
        separator="cell"
        hide-bottom
        hide-pagination
        flat
        :rows="rows"
        :columns="columns"
        row-key="id"
      />
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";

const $q = useQuasar();

const props = defineProps({
  modelValue: {},
});

const content = computed(() => props.modelValue);

const columns = computed({
  get: () =>
    props.modelValue.table_headers ? props.modelValue.table_headers : [],
  set: (val) => (block.value.table_headers = val),
});
const rows = computed({
  get: () =>
    props.modelValue.table_content ? props.modelValue.table_content : [],
  set: (val) => (block.value.table_content = val),
});
</script>
