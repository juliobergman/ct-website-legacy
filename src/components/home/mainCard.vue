<template>
  <div class="col-12 col-sm-4 q-pa-lg">
    <q-card>
      <q-img :ratio="3 / 2" :src="card.image" />
      <q-card-section>
        <div class="text-h6">
          {{ $t("home.cards." + card.card + ".title") }}
        </div>
        <div class="text-subtitle2" v-if="false">
          {{ $t("home.cards." + card.card + ".subtitle") }}
        </div>
        <div class="text-body1" style="opacity: 0.7">
          {{ $t("home.cards." + card.card + ".body") }}
        </div>
      </q-card-section>
      <q-card-actions class="justify-end">
        <q-btn flat class="full-width" padding="0" :to="data.route">
          <q-space />
          <q-icon name="chevron_right" />
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  data: {},
});

const card = computed(() => props.data);
</script>
