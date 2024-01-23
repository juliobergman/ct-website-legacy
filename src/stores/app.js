import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    baseurl: process.env.API_BASE_URL,
    locale: process.env.LOCALE,
    localeOptions: {
      en: {
        value: "en",
        label: "English",
        flag: process.env.API_BASE_URL + "/storage/factory/flags/1x1/gb.svg",
        flag2: process.env.API_BASE_URL + "/storage/factory/flags/4x3/gb.svg",
      },
      es: {
        value: "es",
        label: "Español",
        flag: process.env.API_BASE_URL + "/storage/factory/flags/1x1/es.svg",
        flag2: process.env.API_BASE_URL + "/storage/factory/flags/4x3/es.svg",
      },
      de: {
        value: "de",
        label: "Deutsch",
        flag: process.env.API_BASE_URL + "/storage/factory/flags/1x1/de.svg",
        flag2: process.env.API_BASE_URL + "/storage/factory/flags/4x3/de.svg",
      },
    },
  }),

  getters: {
    getBaseUrl(state) {
      return state.baseurl;
    },
    getLocale(state) {
      return state.locale;
    },
    getLocaleOptions(state) {
      return state.localeOptions;
    },
  },

  actions: {
    setLocale(payload) {
      this.locale = payload;
    },
  },
});
