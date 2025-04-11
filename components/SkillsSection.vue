<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import { motion } from "motion-v";

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = useElementVisibility(sectionRef);

const { t, tm } = useI18n();

const categories = staticData.categories;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
};
</script>

<template>
  <section id="skills" class="relative py-24 md:py-32">
    <UiBackgroundPattern />

    <div class="container relative z-10">
      <div class="mx-auto max-w-4xl text-center">
        <motion.h2
          class="mb-2 text-sm font-medium uppercase tracking-wider text-primary"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: false, margin: '-100px' }"
          :transition="{ duration: 0.6 }"
        >
          {{ t("Skills.title") }}
        </motion.h2>

        <motion.h3
          class="mb-12 text-3xl font-bold tracking-tight md:text-4xl"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: false, margin: '-100px' }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          {{ t("Skills.description") }}
        </motion.h3>
      </div>

      <motion.div
        ref="sectionRef"
        class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        :variants="containerVariants"
        initial="hidden"
        :animate="isVisible ? 'visible' : 'hidden'"
      >
        <motion.div
          v-for="category in categories"
          :key="category.name"
          :variants="itemVariants"
        >
          <div
            class="group relative h-full overflow-hidden rounded-lg border border-primary/20 bg-card/50 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-lg"
          >
            <div
              class="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary backdrop-blur-sm"
            >
              <Icon :name="category.icon" class="size-6" />
            </div>

            <h4 class="mb-3 text-xl font-semibold">
              {{ t(`Skills.categories.${category.name}.name`) }}
            </h4>

            <ul class="space-y-2">
              <li
                v-for="item in tm(`Skills.categories.${category.name}.skills`) as string[]"
                :key="item"
                class="flex items-center text-muted-foreground"
              >
                <span class="mr-2 size-1.5 rounded-full bg-primary" />
                {{ item }}
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>
