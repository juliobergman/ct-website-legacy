<template>
  <div class="q-my-md">
    <q-btn-dropdown
      flat
      no-caps
      menu-anchor="bottom start"
      menu-self="top start"
      :label="cat.name ? cat.name : $t('common.label.all')"
    >
      <q-list style="min-width: 155px">
        <q-item clickable v-ripple @click="setCategory(all)">
          <q-item-section>
            {{ $t("common.label.all") }}
          </q-item-section>
        </q-item>
        <q-item
          v-for="c in categories"
          :key="c.id"
          clickable
          v-ripple
          @click="setCategory(c)"
        >
          <q-item-section>
            {{ c.name }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
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

let open = ref(true);

const cat = computed({
  get: () => props.modelValue,
  set: (val) => {
    $emit("update:modelValue", val);
    $emit("change", val);
  },
});

let tab = ref("all");
let categories = ref([]);

let all = {
  id: "all",
  parent_id: null,
  sort: null,
  type: "business",
  image_id: null,
  name: "All",
  lang: {
    es: "Todos",
    en: "All",
    de: "Alles",
  },
  has_image: false,
};

function setCategory(payload) {
  cat.value = payload;
}

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
