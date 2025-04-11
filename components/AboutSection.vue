<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import { motion } from "motion-v";

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = useElementVisibility(sectionRef);

const { t } = useI18n();

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};
</script>

<template>
  <section id="about" class="relative py-24 md:py-32">
    <UiBackgroundPattern />

    <div class="container relative z-10">
      <motion.div
        ref="sectionRef"
        class="mx-auto max-w-4xl"
        :variants="containerVariants"
        initial="hidden"
        :animate="isVisible ? 'visible' : 'hidden'"
      >
        <motion.h2
          class="mb-2 text-center text-sm font-medium uppercase tracking-wider text-primary"
          :variants="itemVariants"
        >
          {{ t("About.title") }}
        </motion.h2>

        <motion.h3
          class="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl"
          :variants="itemVariants"
        >
          {{ t("About.description") }}
        </motion.h3>

        <div class="grid gap-12 md:grid-cols-2 md:gap-8">
          <motion.div
            :variants="itemVariants"
            class="relative aspect-square max-md:mx-auto max-md:max-w-sm md:aspect-auto md:h-full"
          >
            <NuxtImg
              src="/img/logo.png"
              alt="Jane Doe"
              class="size-full object-contain"
              :height="600"
              :width="600"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
            />
          </motion.div>

          <motion.div
            :variants="itemVariants"
            class="flex flex-col justify-center @container"
          >
            <p class="mb-6 text-lg text-muted-foreground">
              {{ t("About.p1") }}
            </p>

            <p class="mb-6 text-lg text-muted-foreground">
              {{ t("About.p2") }}
            </p>

            <div class="grid @sm:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium">
                  {{ t("About.location.title") }}
                </h4>
                <p class="text-muted-foreground">
                  {{ t("About.location.value") }}
                </p>
              </div>
              <div>
                <h4 class="font-medium">
                  {{ t("About.experience.title") }}
                </h4>
                <p class="text-muted-foreground">
                  {{
                    t(
                      "About.experience.value",
                      {
                        years: getYearOfExperience(),
                      },
                      getYearOfExperience()
                    )
                  }}
                </p>
              </div>
              <div>
                <h4 class="font-medium">
                  {{ t("About.email.title") }}
                </h4>
                <p class="text-muted-foreground">
                  {{ staticData.email }}
                </p>
              </div>
              <div>
                <h4 class="font-medium">
                  {{ t("About.education.title") }}
                </h4>
                <p class="text-muted-foreground">
                  {{ t("About.education.value") }}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
</template>
