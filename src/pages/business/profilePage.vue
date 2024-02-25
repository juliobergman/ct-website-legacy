<template>
  <q-page v-if="loaded" class="business-page-container flex justify-center">
    <q-img
      v-if="!$mobile"
      :ratio="16 / 3"
      :src="business.cover.src"
      class="business-cover"
    >
      <div class="biz-image-overlay full-width absolute-bottom">
        <div class="contain">
          <biz-title :biz-data="business" />
        </div>
      </div>
    </q-img>
    <q-card flat :class="bodyClass">
      <split-frame reverse gutter padding>
        <template #right>
          <ct-image :image="business.avatar" />
        </template>
        <template #left>
          <div>
            <biz-contact :contact="business.default_contact" />
          </div>
          <div class="q-mt-sm" v-if="false">
            <biz-contact :contact="business.default_contact" />
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
            <!-- <div>
              <d-text
                text="caption"
                :opacity="0.8"
                :content="$t('common.label.social_networks')"
              />
            </div> -->
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
        </template>
      </split-frame>
      <div class="q-pa-md">
        <d-text text="caption" :opacity="0.8" :content="'Bio'" />
        <div v-html="business.body" />
      </div>
      <div class="q-pa-md">
        <div class="q-mb-md">
          <d-text text="subtitle2" content="Photos" />
        </div>
        <grid-gallery :media="business.media" />
      </div>
    </q-card>
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

const bodyClass = computed(() => {
  let cls = "business-page";
  if (!$mobile.value) cls += "";
  return cls;
});

let loaded = ref(false);
let category = ref({});
let business = ref({});

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
      $q.loading.hide();
    });
}
watchEffect(() => retrieve($route.params.username));
</script>
