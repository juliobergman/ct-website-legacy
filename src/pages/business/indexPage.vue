<template>
  <q-page v-if="loaded" padding>
    <!-- <q-img
      :ratio="16 / 6"
      :src="category.image.src"
      class="post-featured-image"
    >
      <div class="bg-transparent full-width absolute-bottom">
        <div class="contain">
          <d-text text="h3" shadowed :content="category.name" />
        </div>
      </div>
    </q-img> -->

    <div class="contain">
      <!-- <div class="q-mb-md">
        <q-img :ratio="$mobile ? 16 / 6 : 16 / 3" :src="category.image.src" />
      </div> -->
      <div class="q-mb-sm">
        <d-text text="h6" :content="category.name" />
      </div>
      <div class="">
        <d-text text="body1" :content="category.body_content" />
      </div>
      <q-separator class="q-my-lg" />
      <biz-grid-container :business="business" />
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
const $route = useRoute();
const $router = useRouter();
const $store = useAppStore();
const $mobile = computed(() => ($q.platform.is.mobile ? true : false));

let loaded = ref(false);
let category = ref({});
let business = ref({});

const username = computed(() => $route.params.username);

function retrieve() {
  if (!$route.params.category) return;
  $q.loading.show();

  api
    .get(
      "/api/" +
        $store.getLocale +
        "/business/list/category/" +
        $route.params.category,
      {
        // headers: {
        //   Authorization: "Bearer " + token,
        // },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        category.value = response.data.category;
        business.value = response.data.business;
        loaded.value = true;
      }
      $q.loading.hide();
    })
    .catch((error) => {
      console.error(error);
      $q.loading.hide();
    });
}
watchEffect(() => retrieve($route.params.category));
</script>
<style lang="scss">
.author-container {
  .contain {
    max-width: 1024px;
  }
}
</style>
