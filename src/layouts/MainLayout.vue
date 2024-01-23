<template>
  <q-layout view="hHh lpR fFf">
    <main-header />
    <q-page-container>
      <router-view />
      <!-- <footer-component /> -->
    </q-page-container>
    <main-footer />
  </q-layout>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { api } from "boot/axios";
import { Platform, useQuasar } from "quasar";

const $q = useQuasar();
const $router = useRouter();
const darkmode = computed(() => $q.dark.isActive);
const device =
  Platform.is.name + "-" + Platform.is.platform + "-" + Platform.is.version;
</script>
