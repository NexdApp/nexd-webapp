import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "../locale/en.ts";
import de from "../locale/de.ts";
Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: { en, de }
});
