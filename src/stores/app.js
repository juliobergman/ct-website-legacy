import { defineStore } from "pinia";
import {
  Cookies,
  Loading,
  Dialog,
  Dark,
  SessionStorage,
  LocalStorage,
} from "quasar";

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
    setDarkMode(payload = null) {
      let dm = "auto";
      if (typeof payload == "boolean") {
        dm = payload;
      } else if (typeof payload == "number") {
        if (payload > 0) dm = true;
        else if (payload < 1) dm = false;
      } else if (typeof payload == "string") {
        if (payload == "1" || payload == "true") dm = true;
        else if (payload == "0" || payload == "false") dm = false;
      }
      Cookies.set("dark_mode", dm, { path: "/" });
      Dark.set(dm);
    },
  },
});
