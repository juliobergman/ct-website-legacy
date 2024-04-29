<template>
  <div class="q-mb-xl">
    <q-tabs no-caps v-model="cat" align="left" active-color="primary">
      <q-tab name="all" :label="$t('common.label.all')" />
      <q-tab
        v-for="category in categories"
        :key="category.id"
        :name="category.id"
        :label="category.name"
      />
    </q-tabs>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted } from "vue";
import { api } from "boot/axios";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { useAppStore } from "stores/app";

const $q = useQuasar();
const $store = useAppStore();
const $router = useRouter();
const $route = useRoute();

const props = defineProps({
  modelValue: {},
});

const $emit = defineEmits(["update:modelValue", "change"]);

const cat = computed({
  get: () => props.modelValue,
  set: (val) => {
    $emit("update:modelValue", val);
    $emit("change");
  },
});

let tab = ref("all");
let categories = ref([]);

function retrieve() {
  $q.loading.show();
  api
    .get("/api/" + $store.getLocale + "/category/list/business/true", {
      // params: $route.query,
      // headers: {
      //   Authorization: "Bearer " + token,
      // },
    })
    .then((response) => {
      if (response.statusText === "OK") {
        categories.value = response.data;
        // tab.value = response.data[0].id;
      }
      $q.loading.hide();
    })
    .catch((error) => {
      console.error(error.response);
      $q.loading.hide();
    });
}
watchEffect(() => retrieve($store.getLocale));

onMounted(() => {
  retrieve();
});
</script>
