<template>
  <q-page
    v-if="displayPage.business"
    class="business-page-container flex justify-center"
  >
    <q-img
      v-if="!$mobile"
      :ratio="16 / 3"
      :src="business.cover.src"
      class="business-cover"
    >
      <div class="biz-image-overlay full-width absolute-bottom">
        <div class="contain">
          <!-- <biz-title :biz-data="business" /> -->
        </div>
      </div>
    </q-img>
    <q-card flat :class="bodyClass">
      <!-- <d-btn @click="retrieve" /> -->
      <q-card-section class="q-pa-none">
        <split-frame gutter padding>
          <template #right>
            <!-- <q-img
              :ratio="1 / 1"
              :src="business.avatar.src"
              :srcset="business.avatar.srcset"
              img-class="rounded-borders"
            /> -->
            <ct-image :src="business.avatar" :ratio="1 / 1" fit="cover" />
            UBICACION AQUI
          </template>
          <template #left>
            <!-- <div class="q-pa-md"> -->
            <biz-title minimal :biz-data="business" />
            <div v-html="business.body"></div>
            <!-- </div> -->
          </template>
        </split-frame>
      </q-card-section>
      <q-card-section>
        <div>
          <div>
            <biz-contact :contact="business.contact" />
          </div>
          <div class="q-mt-sm q-px-xs">
            <div>
              <d-text text="caption" :opacity="0.8" :content="'Website'" />
            </div>
            <div>
              <d-link target="_blank" :href="'https://' + business.website">
                {{ business.website }}
              </d-link>
            </div>
          </div>
          <div class="q-mt-sm q-px-xs">
            <div>
              <div :class="$mobile ? 'column items-start' : 'row'">
                <biz-social-chip
                  v-for="(social, idx) in business.social_media"
                  :key="social.id"
                  :media="social"
                  :first="idx === 0 || $mobile ? true : false"
                />
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-pa-none">
        <div class="q-pa-md">
          <div class="q-mb-md">
            <d-text text="subtitle2" content="Photos" />
          </div>
          <grid-gallery :media="business.media" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
  <q-page v-else-if="displayPage.stop"> Page not Running </q-page>
  <fpm-free-business-page
    v-else-if="displayPage.expired"
    :business="business"
  />
  <fpm-error-not-found v-else-if="displayPage.notfound" />
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

const bodyClass = computed(() => {
  let cls = "business-page";
  if (!$mobile.value) cls += "";
  return cls;
});

let loaded = ref(false);
let category = ref({});
let business = ref({});

const displayPage = computed(() => {
  if (!loaded.value)
    return { business: false, stop: false, expired: false, notfound: false };
  // Not Found
  if (_.isEmpty(business.value))
    return { business: false, stop: false, expired: false, notfound: true };
  // Not Running
  if (!business.value.run)
    return { business: false, stop: false, expired: false, notfound: true };
  // Free
  if (business.value.run && business.value.subscription_status == "free")
    return { business: false, stop: false, expired: true, notfound: false };
  // Expired
  if (business.value.run && business.value.subscription_status == "expired")
    return { business: false, stop: false, expired: true, notfound: false };
  // Running
  if (business.value.run && business.value.subscription_status == "active")
    return { business: true, stop: false, expired: false, notfound: false };
  return { business: false, stop: false, expired: false, notfound: false };
});

const username = computed(() => $route.params.username);

function retrieve() {
  if (!$route.params.username) return;
  $q.loading.show();

  api
    .get(
      "/api/" + $store.getLocale + "/business/show/" + $route.params.username,
      {
        // headers: {
        //   Authorization: "Bearer " + token,
        // },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        business.value = response.data;
        loaded.value = true;
      }
      $q.loading.hide();
    })
    .catch((error) => {
      console.error(error);
      console.error(error.response);
      loaded.value = true;
      business.value = null;
      $q.loading.hide();
    });
}
watchEffect(() => retrieve($route.params.username));
</script>
