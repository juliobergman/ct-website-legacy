<template>
  <q-page>
    <home-parallax>
      <template #cover>
        <div
          v-if="false"
          class="fit row justify-center text-white"
          style="padding-top: 150px"
        >
          <div class="column gf-01 text-center">
            <div class="text-h2">{{ $t("home.label.welcome") }}</div>
            <div class="text-h1">Colonia Tovar</div>
          </div>
        </div>
      </template>
      <template #sl01>
        <div>
          <div class="q-mt-xl q-mb-lg">
            <q-separator
              class="contain"
              color="orange-3"
              :size="'2px'"
              v-if="false"
            />
            <div class="column gf-03 text-center q-my-md">
              <h2 :class="$mobile ? 'q-my-none text-h4' : 'q-my-none text-h2'">
                {{ $t("home.label.welcome") }}
              </h2>
              <h1 :class="$mobile ? 'q-my-none text-h2' : 'q-my-none text-h1'">
                Colonia Tovar
              </h1>
            </div>
            <q-separator class="contain" color="orange-3" :size="'2px'" />
          </div>
          <div class="index-card-container row justify-around">
            <home-card
              v-for="card in mainCards"
              :key="card.card"
              :data="card"
            />
          </div>
        </div>
      </template>
      <template #sl02>
        <q-separator color="orange-3" :size="'2px'" />
        <home-latest-posts />
      </template>
      <template #sl03>
        <home-latest-biz />
      </template>
    </home-parallax>
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

let tab = ref("mails");

let slide = ref(1);

let mainCards = ref([
  {
    card: "card1",
    image:
      "https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: { name: "business-category", params: { category: 12 } },
  },
  {
    card: "card2",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: { name: "business-category", params: { category: 4 } },
  },
  {
    card: "card3",
    image:
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: { name: "business-category", params: { category: 1 } },
  },
]);
</script>
