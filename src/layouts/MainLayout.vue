<template>
  <q-layout view="hHh lpR fFf">
    <main-header />
    <q-page-container>
      <router-view />
      <footer-component />
    </q-page-container>
    <main-footer />
  </q-layout>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useAppStore } from "stores/app";
import { useQuasar, useMeta } from "quasar";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const $q = useQuasar();
const $store = useAppStore();
const $route = useRoute();

onMounted(() => {
  if ($q.cookies.has("dark_mode")) {
    $store.setDarkMode($q.cookies.get("dark_mode"));
  } else {
    $store.setDarkMode();
  }
});
</script>
