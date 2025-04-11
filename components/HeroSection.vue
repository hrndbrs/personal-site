<script setup lang="ts">
import { motion } from "motion-v";
import { useScroll, useElementSize } from "@vueuse/core";

const sectionRef = ref<HTMLElement | null>(null);
const { y: scrollY } = useScroll(window);
const { height: sectionHeight } = useElementSize(sectionRef);

const { t, tm, locale } = useI18n();

const y = computed(() => {
  if (!sectionRef.value) return "0%";
  const progress = scrollY.value / (sectionHeight.value * 0.4);
  return `${Math.min(progress * 40, 40)}%`;
});

const opacity = computed(() => {
  if (!sectionRef.value) return 1;
  const progress = scrollY.value / (sectionHeight.value * 0.8);
  return Math.max(1 - progress, 0);
});
</script>

<template>
  <section
    id="home"
    ref="sectionRef"
    class="relative flex min-h-screen items-center justify-center overflow-hidden"
  >
    <!-- Background elements -->
    <div class="absolute inset-0 z-0">
      <div
        class="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"
      />
    </div>

    <motion.div
      class="container relative z-10 flex flex-col items-center justify-center text-center"
      :style="{ transform: `translateY(${y})`, opacity }"
    >
      <motion.h1
        class="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.2 }"
      >
        <span class="block">{{ t("Hero.intro") }}</span>
        <TypingText
          :key="locale"
          :texts="tm('Hero.texts') as string[]"
          class="mt-2 block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
        />
      </motion.h1>

      <motion.p
        class="mb-8 max-w-2xl text-xl text-muted-foreground"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.4 }"
      >
        {{ t("Hero.description") }}
      </motion.p>

      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.6 }"
      >
        <NuxtLink to="#projects">
          <UiButton size="lg" class="rounded-full">
            {{ t("Hero.button") }}
            <Icon name="lucide:arrow-down" class="ml-2 size-4" /> </UiButton
        ></NuxtLink>
      </motion.div>
    </motion.div>

    <div class="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
      <motion.div
        :initial="{ y: 0 }"
        :animate="{ y: [0, 10, 0] }"
        :transition="{ repeat: Infinity, duration: 2 }"
      >
        <Icon name="lucide:arrow-down" class="size-6 text-white" />
      </motion.div>
    </div>
  </section>
</template>
