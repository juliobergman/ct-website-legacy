<template>
  <q-page padding :class="$mobile ? 'flex justify-center' : 'flex flex-center'">
    <q-card flat class="bg-none dialog-card">
      <div>
        <q-img img-class="rounded-borders" :src="biz.avatar.src" />
      </div>

      <q-card-section>
        <div class="text-h6">{{ biz.name }}</div>
        <div class="text-subtitle2">
          <biz-chip
            v-for="(cat, idx) in business.categories.slice(0, 2)"
            :key="cat.id"
            :category="cat"
            :first="idx === 0 ? true : false"
            @click.stop
          />
        </div>
        <div v-if="biz.default_contact" class="text-subtitle2">
          <q-icon name="phone" />
          {{ biz.default_contact.phones[0].content }}
        </div>
      </q-card-section>
    </q-card>
    <d-btn
      v-if="$mobile"
      square
      color="ui"
      class="absolute-bottom"
      :label="$t('error.404.btn1')"
      iconLeft="chevron_left"
      @click="$router.go(-1)"
    />
  </q-page>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted } from "vue";
import { api } from "boot/axios";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { useAppStore } from "stores/app";

const $q = useQuasar();
const $store = useAppStore();
const $router = useRouter();
const $route = useRoute();
const $mobile = computed(() => ($q.platform.is.mobile ? true : false));

const props = defineProps({
  business: {},
});

const $emit = defineEmits(["update:modelValue", "change"]);

const biz = computed(() => props.business);
</script>
