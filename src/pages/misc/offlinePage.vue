<template>
  <div class="fullscreen flex flex-center">
    <div class="text-center">
      <div class="q-mb-lg">
        <q-icon size="120px" class="animated zoomIn">
          <logo-icon :dark="dark" />
        </q-icon>
        <!-- <logo-text :dark="dark" /> -->
      </div>
      <d-text text="subtitle2" tag="div" :content="$t('offline.text1')" />
      <d-text text="subtitle2" tag="div" :content="$t('offline.text2')" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useQuasar } from "quasar";
import { useAppStore } from "stores/app";
const $q = useQuasar();
const $store = useAppStore();

onMounted(() => {
  if ($q.cookies.has("dark_mode")) {
    $store.setDarkMode($q.cookies.get("dark_mode"));
  } else {
    $store.setDarkMode();
  }
});
const dark = computed(() => $q.dark.isActive);
</script>
