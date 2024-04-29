<template>
  <div class="section flex justify-center">
    <div class="content q-gutter-y-lg q-pa-md">
      <d-text text="h6" weight="medium" :content="$t('biz.label.latest')" />
      <biz-grid-container :business="business" />
    </div>
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

let business = ref([]);

function retrieve() {
  $q.loading.show();
  api
    .get("/api/" + $store.getLocale + "/business/list/latest", {
      // params: $route.query,
      // headers: {
      //   Authorization: "Bearer " + token,
      // },
    })
    .then((response) => {
      if (response.statusText === "OK") {
        business.value = response.data;
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
<style lang="scss" scoped>
.section {
  min-width: 100vw;
}
.content {
  width: 100vw;
  max-width: 1200px;
  margin: 50px 0px 100px 0px;
}
</style>
