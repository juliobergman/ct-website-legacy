<template>
  <q-header reveal :reveal-offset="700" bordered class="bg-dark text-white">
    <!-- <q-header> -->
    <q-toolbar>
      <q-toolbar-title class="cursor-pointer" @click="goHome">
        <q-icon>
          <logo-icon dark />
        </q-icon>
        <!-- <logo-text v-if="!$mobile" class="q-ml-md" color="white" /> -->
      </q-toolbar-title>

      <q-tabs
        v-if="!$mobile"
        stretch
        inline-label
        class="text-white text-weight-light"
      >
        <q-tab name="places" label="Restaurants" no-caps />
        <q-tab name="things" label="Where to Stay" no-caps />
        <q-tab name="information" label="Blog" no-caps />
      </q-tabs>

      <btn-dark-mode-header />
      <btn-locale />

      <!-- <q-tabs v-if="!$mobile" stretch inline-label class="text-white">
        <q-tab name="places" icon="follow_the_signs" label="Places to Go" />
        <q-tab name="things" icon="nature_people" label="Things to Do" />
        <q-tab name="information" icon="info" label="Information" />
        <q-tab name="shop" icon="store" label="Shop" />
      </q-tabs> -->
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
const $q = useQuasar();
const $router = useRouter();

const $mobile = computed(() => $q.platform.is.mobile);

function goHome() {
  $router.push({ name: "home-page" });
}
</script>
