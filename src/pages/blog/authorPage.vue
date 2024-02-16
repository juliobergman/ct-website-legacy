<template>
  <q-page padding class="author-container" v-if="loaded">
    <div class="contain">
      <!-- author info -->
      <div class="full-width row">
        <div class="col-12 col-sm-4 flex flex-center q-pa-md">
          <q-avatar class="fit" style="max-width: 150px; max-height: 150px">
            <q-img :src="author.userdata.avatar" />
          </q-avatar>
        </div>
        <div class="col-12 col-sm-8 q-gutter-y-sm">
          <div class="row">
            <d-text text="h6" :content="author.username" />
          </div>
          <div class="row">
            <d-text
              text="body1"
              weight="medium"
              class="q-mr-xs"
              :content="author.post_count_string"
            />
            <d-text text="body1" :content="'posts'" />
          </div>
          <div class="row">
            <d-text text="subtitle2" :content="author.name" />
          </div>
          <div class="row" v-if="author.userdata.bio">
            <d-text :content="author.userdata.bio" />
          </div>
          <div class="row" v-if="author.userdata.public_email">
            <d-text weight="medium" :content="author.userdata.public_email" />
          </div>
        </div>
      </div>
      <!-- Posts -->
      <q-separator class="q-my-lg" />

      <post-grid :posts="author.posts" />
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
let author = ref({});

const username = computed(() => $route.params.username);

function retrieve() {
  if (!$route.params.username) return;
  $q.loading.show();

  api
    .get("/api/es/post/author/" + encodeURIComponent($route.params.username), {
      // headers: {
      //   Authorization: "Bearer " + token,
      // },
    })
    .then((response) => {
      if (response.status === 200) {
        author.value = response.data;
        loaded.value = true;
      }
      $q.loading.hide();
    })
    .catch((error) => {
      console.error(error);
      $q.loading.hide();
    });
}
watchEffect(() => retrieve(username));
</script>
<style lang="scss">
.author-container {
  .contain {
    max-width: 1024px;
  }
}
</style>
