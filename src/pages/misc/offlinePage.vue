<template>
  <div class="fullscreen flex flex-center">
    <div class="text-center">
      <div class="q-mb-lg">
        <q-icon size="120px" class="animated zoomIn">
          <logo-icon :dark="dark" />
        </q-icon>
        <!-- <logo-text :dark="dark" /> -->
      </div>
      <d-text
        text="subtitle2"
        tag="div"
        content="Our Website is Under Construction"
      />
      <d-text text="subtitle2" tag="div" content="Check Back Soon..." />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();

$q.dark.set(false);
const dark = computed(() => $q.dark.isActive);
</script>
