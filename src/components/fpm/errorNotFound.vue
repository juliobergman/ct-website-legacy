<template>
  <q-page padding class="flex flex-center">
    <q-card flat class="bg-none q-pa-xl">
      <q-card-section>
        <div class="q-my-lg">
          <d-text text="h1" weight="bold" :content="$t('error.404.t1')" />
        </div>
        <!-- <div class="q-my-sm" style="opacity: 0.6">
          <d-text text="h6" weight="medium" :content="$t('error.404.t2')" />
        </div> -->
        <div class="q-my-sm">
          <d-text tag="div" :content="$t('error.404.t3')" />
        </div>
      </q-card-section>
      <q-card-actions>
        <q-space />
        <d-btn
          color="ui"
          icon-left="chevron_left"
          :label="$t('error.404.btn1')"
          outline
          @click="$router.go(-1)"
        />
        <d-btn
          color="ui"
          class="text-ui-reverse"
          :label="$t('error.404.btn2')"
          :to="{ name: 'home-page' }"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { useRouter } from "vue-router";
const $router = useRouter();
</script>
