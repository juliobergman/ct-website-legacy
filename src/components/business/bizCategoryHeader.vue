<template>
  <div class="q-mt-sm q-mb-md">
    <q-tabs
      no-caps
      vertical
      v-model="tab"
      align="center"
      active-color="primary"
      dense
    >
      <!-- <q-tab name="all" :label="$t('common.label.all')" /> -->
      <q-route-tab
        :label="$t('common.label.all')"
        :to="{ name: 'business-index' }"
      />
      <q-route-tab
        v-for="cat in categories"
        :key="cat.id"
        :label="cat.name"
        :to="{ name: 'business-category', params: { category: cat.id } }"
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
