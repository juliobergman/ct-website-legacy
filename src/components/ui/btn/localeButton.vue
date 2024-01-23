<template>
  <q-btn flat round v-if="!hidden">
    <q-avatar size="22px">
      <img :src="flag" />
    </q-avatar>
    <q-menu>
      <q-list>
        <q-item
          v-for="(lang, idx) in localeOptions"
          :key="idx"
          clickable
          v-close-popup
          tabindex="0"
          @click="onItemClick(lang)"
        >
          <q-item-section>
            <q-item-label>{{ lang.label }}</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar size="sm">
              <q-img :src="lang.flag" />
            </q-avatar>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useAppStore } from "stores/app";
import { useQuasar } from "quasar";

const $q = useQuasar();
const $store = useAppStore();

const props = defineProps({
  hidden: {
    type: Boolean,
    default: false,
  },
});
const hidden = computed(() => props.hidden);
const $emit = defineEmits(["update:lang"]);
const { locale } = useI18n({ useScope: "global" });
const flag = computed(
  () => _.find(localeOptions.value, (e) => e.value == locale.value)["flag"]
);

function onItemClick(lang) {
  setLanguage(lang.value);
}

if ($q.cookies.has("language")) {
  setLanguage($q.cookies.get("language"));
}

function setLanguage(payload) {
  locale.value = payload;
  $q.cookies.set("language", payload, { path: "/" });
  $store.setLocale(payload);
  $emit("update:lang", payload);
}

const localeOptions = computed(() => $store.getLocaleOptions);
</script>
