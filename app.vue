<script setup lang="ts">
const { t, locale } = useI18n();

const title = `HRNDBRS | ${t("meta.title")}`;
const description = t("meta.description");
const url = String(useRuntimeConfig().public.URL || "");

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { name: "keywords", content: t("meta.keywords") },
    { name: "author", content: "HRNDBRS" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: "/og-image.jpg" },
    { name: "twitter:card", content: "twitter_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: "/twitter-image.jpg" },
    { name: "theme-color", content: "#000000" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      size: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      size: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      size: "16x16",
      href: "/favicon-16x16.png",
    },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: "canonical", href: url },
  ],
  htmlAttrs: {
    lang: locale.value,
    dir: "ltr",
  },
});
</script>

<template>
  <UApp>
    <div class="relative min-h-screen">
      <NavigationMenu />

      <main class="md:ml-16">
        <HeroSection />
        <AboutSection />
        <HistorySection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <PageFooter />
      </main>
    </div>
  </UApp>
</template>
