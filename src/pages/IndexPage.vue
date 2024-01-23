<template>
  <q-page class="flex justify-center">
    <home-parallax>
      <template #cover>
        <div
          class="fit row justify-center text-white"
          style="padding-top: 150px"
        >
          <div class="column gf-01 text-center">
            <div class="text-h2">Welcome to</div>
            <div class="text-h1">Colonia Tovar</div>
          </div>
        </div>
      </template>
      <template #sl01>
        <div class="q-pa-lg">
          <div class="column gf-01 text-center text-white q-mb-xl">
            <div class="text-h2">Welcome to</div>
            <div class="text-h1">Colonia Tovar</div>
          </div>
          <div class="row justify-around q-col-gutter-lg">
            <home-card
              v-for="card in mainCards"
              :key="card.card"
              :data="card"
            />
          </div>
        </div>
      </template>
      <template #sl02>
        <home-post-section />
      </template>
    </home-parallax>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

let tab = ref("mails");

let slide = ref(1);

let mainCards = ref([
  {
    card: "card1",
    image:
      "https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: "#",
  },
  {
    card: "card2",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: "#",
  },
  {
    card: "card3",
    image:
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: "#",
  },
]);
</script>
