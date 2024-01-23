<template>
  <div class="section flex justify-center">
    <div class="content q-gutter-y-lg">
      <div class="text-h3">Latest Post</div>
      <home-post-card v-for="post in posts" :key="post.id" :post-data="post" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted } from "vue";
import { api } from "boot/axios";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";

const $q = useQuasar();
const $router = useRouter();
const $route = useRoute();

let posts = ref([]);

function retrieve() {
  $q.loading.show();
  api
    .get("/api/es/post/list/latest", {
      // params: $route.query,
      // headers: {
      //   Authorization: "Bearer " + token,
      // },
    })
    .then((response) => {
      if (response.statusText === "OK") {
        posts.value = response.data;
      }
      $q.loading.hide();
    })
    .catch((error) => {
      console.error(error.response);
      $q.loading.hide();
    });
}
// watchEffect(() => retrieve($userStore));

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
