<template>
  <q-page :padding="!category.has_image" v-if="loaded">
    <div v-if="category.has_image">
      <q-img :ratio="$mobile ? 5 / 5 : 16 / 3.5" :src="category.image.src">
        <div class="gradient-overlay full-width absolute-bottom">
          <div class="contain">
            <div class="row">
              <h1 class="post-title text-shadow-1 text-h3 q-pa-none q-ma-none">
                {{ category.name }}
              </h1>
            </div>
            <div
              class="row q-mt-md"
              v-if="category.body_content[$store.getLocale] ? true : false"
            >
              <div
                class="post-title text-shadow-1 text-body1 q-pa-none q-ma-none"
              >
                {{ category.body_content[$store.getLocale] }}
              </div>
            </div>
          </div>
        </div>
      </q-img>
    </div>
    <div class="contain">
      <div class="q-px-md">
        <biz-category-selector v-model="category" @change="setCategory" />
      </div>
      <div class="q-px-md" v-if="!category.has_image">
        <div class="q-mb-sm">
          <d-text text="h6" :content="category.name" />
        </div>
        <div v-if="category.body_content ? true : false">
          <div
            class="q-mb-sm"
            v-if="category.body_content[$store.getLocale] ? true : false"
          >
            <d-text
              text="body1"
              :content="category.body_content[$store.getLocale]"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md">
        <biz-grid-container :business="business" />
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
const $route = useRoute();
const $router = useRouter();
const $store = useAppStore();
const $mobile = computed(() => ($q.platform.is.mobile ? true : false));

let loaded = ref(false);
let category = ref({});
let business = ref({});
let section = ref("all");

const username = computed(() => $route.params.username);

function setCategory(payload) {
  console.log(payload);
  $router.push({
    name: "business-category",
    params: { category: payload.id },
  });
}

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
