// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      URL: process.env["URL"],
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/icon",
    "motion-v/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
  ],
  icon: {
    customCollections: [
      {
        prefix: "local",
        dir: "./public/icons",
      },
    ],
  },
  i18n: {
    strategy: "no_prefix",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.ts",
      },
      {
        code: "jp",
        name: "Japanese",
        file: "jp.ts",
      },
    ],
  },
});
