<template>
  <q-layout>
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "src/stores/app";

$store = useAppStore();

onMounted(() => {
  if ($q.cookies.has("dark_mode")) {
    $store.setDarkMode($q.cookies.get("dark_mode"));
  } else {
    $store.setDarkMode("auto");
  }
});
</script>
