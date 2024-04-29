<template>
  <q-page v-if="loaded">
    <blog-featured-post class="q-mb-xl" :post="blog.featured_post" />
    <div :class="$mobile ? 'contain q-px-md' : 'contain'">
      <div>
        <div class="q-mb-md">
          <d-text text="h6" content="Top Posts" />
        </div>
        <post-column :posts="blog.top_posts" />
      </div>
      <div>
        <div class="q-mb-md">
          <d-text text="h6" content="Latest Posts" />
        </div>
        <post-grid :posts="blog.latest_post" />
      </div>
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
