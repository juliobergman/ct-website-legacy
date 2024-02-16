<template>
  <q-page v-if="loaded" class="post-page-container flex justify-center">
    <q-img :ratio="16 / 6" :src="post.image.src" class="post-featured-image">
      <div class="post-image-overlay full-width absolute-bottom">
        <div class="contain">
          <blog-post-title :post-data="post" />
        </div>
      </div>
    </q-img>

    <q-card flat class="post-page">
      <!-- <q-img :ratio="16 / 9" :src="post.image.src">
        <div class="post-image-overlay full-width absolute-bottom">
          <blog-post-title :post-data="post" />
        </div>
      </q-img> -->
      <!-- img-class="rounded-borders" -->
      <!-- <q-parallax
        :speed="9 / 10"
        scroll-target=".scroll"
        :src="post.image.src"
      /> -->
      <div class="column q-pa-md">
        <!-- <q-separator /> -->
        <div class="full-width q-gutter-y-lg">
          <post-block-selector
            v-for="block in post.content"
            :key="block.id"
            :block="block"
          />
          <q-separator />
          <blog-user-insert
            clickable
            by
            v-model="post.author"
            :post-date="post.post_date"
          />
        </div>
      </div>
    </q-card>

    <q-page-sticky position="top-right" :offset="[14, 14]">
      <q-btn flat fab icon="close" @click="$router.go(-1)" />
    </q-page-sticky>
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

// const imageRatio = computed(() => {});

const slug = computed(() => $route.params.slug);

let loaded = ref(false);

let post = ref({});

function retrieve() {
  if (!$route.params.slug) return;
  $q.loading.show();

  api
    .get("/api/" + $store.getLocale + "/post/show/" + $route.params.slug, {
      // headers: {
      //   Authorization: "Bearer " + token,
      // },
    })
    .then((response) => {
      if (response.status === 200) {
        post.value = response.data;
        // postStatus.value = response.data.status;
        loaded.value = true;
      }
      $q.loading.hide();
    })
    .catch((error) => {
      console.error(error);
      $q.loading.hide();
    });
}
watchEffect(() => retrieve(slug));
</script>
