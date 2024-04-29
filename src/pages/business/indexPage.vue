<template>
  <q-page v-if="loaded" padding>
    <div class="contain">
      <q-infinite-scroll
        ref="iscroll"
        :initial-index="1"
        @load="onLoad"
        :offset="200"
      >
        <biz-category-header />
        <!-- <div class="text-pre">
          {{ business }}
        </div> -->
        <biz-grid-container :business="business" />
      </q-infinite-scroll>
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
let scrollActive = ref(true);
let category = ref("all");
let business = ref({});
let iscroll = ref(null);

function retrieve(lang, offset = 1) {
  if (!$store.getLocale) return;
  $q.loading.show();

  api
    .get(
      "/api/" +
        $store.getLocale +
        "/business/list/fcategory/" +
        category.value +
        "?scroll=" +
        offset,
      {
        // headers: {
        //   Authorization: "Bearer " + token,
        // },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        if (offset == 1) {
          business.value = response.data;
        }
        if (offset > 1) {
          business.value = [...business.value, ...response.data];
        }

        if (response.data.length < 12) scrollActive.value = false;
        loaded.value = true;
      }
      $q.loading.hide();
    })
    .catch((error) => {
      console.error(error);
      $q.loading.hide();
    });
}
watchEffect(() => retrieve($store.getLocale));

function onLoad(payload, done) {
  if (scrollActive.value) {
    retrieve($store.getLocale, payload);
    done();
  }
}

function resetScroll() {
  console.log("resetScroll()");
  if (iscroll.value) {
    iscroll.value.reset();
    scrollActive.value = true;
  }
}
// watchEffect(() => resetScroll(category.value));
</script>
<style lang="scss">
.author-container {
  .contain {
    max-width: 1024px;
  }
}
</style>
