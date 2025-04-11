<script setup lang="ts">
const isOpen = ref(false);
const { isMobile } = useViewport();
const { locale, locales, setLocale } = useI18n();

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <UPopover
    v-model:open="isOpen"
    :content="{ side: isMobile ? 'bottom' : 'right', align: 'center' }"
    :ui="{
      content: 'flex p-1 flex-col gap-1 bg-popover  ',
    }"
  >
    <button
      class="relative flex size-10 items-center justify-center rounded-md transition-colors cursor-pointer"
      :class="[
        isOpen
          ? 'text-primary bg-primary/10'
          : 'text-white hover:text-primary hover:bg-primary/5',
      ]"
    >
      <Icon name="lucide:globe" class="size-5" />
    </button>

    <template #content>
      <button
        v-for="loc in locales"
        :key="loc.code"
        class="inline-flex justify-between gap-8 rounded-md px-2 py-1"
        :class="[
          locale === loc.code
            ? 'font-semibold'
            : 'hover:bg-background cursor-pointer',
        ]"
        @click="
          setLocale(loc.code);
          toggleOpen();
        "
      >
        <span>{{ loc.name }}</span>
        <Icon
          :class="[locale === loc.code ? 'visible' : 'invisible']"
          name="lucide:check"
          class="size-4"
        />
      </button>
    </template>
  </UPopover>
</template>
