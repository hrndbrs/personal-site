<script setup lang="ts">
const currentYear = new Date().getFullYear();
const { t } = useI18n();
</script>

<template>
  <footer class="border-t py-12">
    <div class="container">
      <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div class="flex flex-col items-center gap-2 md:items-start">
          <NuxtLink to="#home" class="text-xl font-bold tracking-tight">
            <span class="text-primary">HRND</span>
            <span class="text-white">BRS</span>
          </NuxtLink>
          <p
            class="text-center text-sm text-muted-foreground md:text-left mb-4 md:mb-2"
          >
            {{ t("Footer.subtitle") }}
          </p>
        </div>

        <div class="flex gap-4">
          <a
            v-for="item in socialMedia"
            :key="item.name"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <span class="sr-only">{{ item.name }}</span>
            <Icon :name="item.icon" class="size-5" />
          </a>
        </div>
      </div>
      <div class="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
        <p>© {{ currentYear }} All rights reserved</p>
      </div>
    </div>
  </footer>
</template>
