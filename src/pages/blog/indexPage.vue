<template>
  <q-page padding>
    <div class="row">
      <blog-featured-post />
    </div>
    <div class="row">
      <div>
        <d-text content="Top Posts" />
      </div>
      <post-column />
    </div>
    <div class="row">
      <div>
        <d-text content="Latest Posts" />
      </div>
      <!-- <post-grid :posts="blog.latest_post" /> -->
    </div>
    <div class="text-pre">
      {{ blog }}
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted } from "vue";
import { api } from "boot/axios";
import { useRoute, useRouter } from "vue-router";
import { useQuasar, date } from "quasar";
import { useAppStore } from "stores/app";

const $q = useQuasar();
const $store = useAppStore();
const $route = useRoute();
const $router = useRouter();

const $mobile = computed(() => ($q.platform.is.mobile ? true : false));
const slug = computed(() => $route.params.slug);

let loaded = ref(false);
let blog = ref({});

function retrieve() {
  if (!$store.getLocale) return;
  $q.loading.show();

  api
    .get("/api/" + $store.getLocale + "/blog/index", {
      // headers: {
      //   Authorization: "Bearer " + token,
      // },
    })
    .then((response) => {
      if (response.status === 200) {
        blog.value = response.data;
        loaded.value = true;
      }
      $q.loading.hide();
    })
    .catch((error) => {
      console.error(error);
      $q.loading.hide();
    });
}
watchEffect(() => retrieve($store));
</script>
