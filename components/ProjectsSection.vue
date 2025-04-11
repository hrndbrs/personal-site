<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import { motion } from "motion-v";
import { Tag } from "~/utils/types/project.type";
import type { Project } from "~/utils/types/project.type";

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = useElementVisibility(sectionRef);
const hoveredIndex = ref<number | null>(null);

const { t } = useI18n();
const imgDir = "/img/projects";

const projects: Project[] = [
  {
    title: "ZOAN Computing",
    description:
      "ZOAN is an Indonesian tech company offering end-to-end hardware solutions—from servers and IoT devices to custom PCs and workstations—designed for performance, scalability, and modern business needs.",
    image: imgDir + "/zoan.png",
    tags: [Tag.NEXTJS, Tag.TYPESCRIPT, Tag.TAILWIND, Tag.SHADCN],
    link: "https://zoan.co.id",
  },
  {
    title: "Inspirasi Satu Indonesia Company Profile",
    description:
      "Inspirasi Satu is a Jakarta-based company offering coaching, training, and counseling services to empower individuals and organizations, with a focus on leadership, soft skills, and youth development.",
    image: imgDir + "/isi.png",
    tags: [Tag.NEXTJS, Tag.TYPESCRIPT, Tag.TAILWIND],
    link: "https://inspirasisatu.com",
  },
  {
    title: "Airdrop Finder",
    description:
      "Airdrop Finder is Indonesia’s leading crypto marketing platform and community, helping users discover trusted airdrops and earn free tokens through curated campaigns and AMA sessions.",
    image: imgDir + "/airdropfinder.png",
    tags: [Tag.NEXTJS, Tag.TYPESCRIPT, Tag.GSAP, Tag.TAILWIND, Tag.NEXT_INTL],
    link: "https://airdropfinder.com",
  },
  {
    title: "Inspirasi Satu Indonesia - User Dashboard",
    description:
      "The Inspirasi Satu Dashboard is a client platform for scheduling, tracking, and managing personal development programs and sessions.",
    image: imgDir + "/isi-dashboard.png",
    tags: [Tag.NEXTJS, Tag.TYPESCRIPT, Tag.SHADCN, Tag.PWA, Tag.TAILWIND],
    link: "https://dashboard.inspirasisatu.com",
  },
  {
    title: "Web Pro Kuantum",
    description:
      "Workforce Pro Kuantum provides customized talent and IT solutions, including recruitment, training, software development, and managed services. They help businesses scale efficiently through tech-driven support.",
    image: imgDir + "/wpk.png",
    tags: [Tag.NEXTJS, Tag.TYPESCRIPT, Tag.SHADCN, Tag.FRAMER_MOTION],
    link: "https://wprokuantum.com",
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};
</script>

<template>
  <section id="projects" class="relative py-24 md:py-32">
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
          {{ t("Projects.title") }}
        </motion.h2>

        <motion.h3
          class="mb-12 text-3xl font-bold tracking-tight md:text-4xl"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: false, margin: '-100px' }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          {{ t("Projects.description") }}
        </motion.h3>
      </div>

      <motion.div
        ref="sectionRef"
        class="grid gap-8 md:grid-cols-2"
        :variants="containerVariants"
        initial="hidden"
        :animate="isVisible ? 'visible' : 'hidden'"
      >
        <motion.div
          v-for="(project, index) in projects"
          :key="project.title"
          :variants="itemVariants"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
          <div
            class="group relative overflow-hidden rounded-lg border border-border/50 bg-card/50 p-0 backdrop-blur-sm"
          >
            <div class="relative aspect-video overflow-hidden">
              <NuxtImg
                :src="project.image"
                :alt="project.title"
                class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            <div class="p-6">
              <h4 class="mb-2 text-xl font-semibold">{{ project.title }}</h4>
              <p class="mb-4 line-clamp-2 text-muted-foreground">
                {{ project.description }}
              </p>

              <div class="mb-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex space-x-2">
                  <UiButton size="sm" variant="outline">
                    <a
                      :href="project.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center"
                    >
                      <Icon name="lucide:external-link" class="mr-2 size-4" />
                      Preview
                    </a>
                  </UiButton>
                  <UiButton
                    v-if="project.githubUrl"
                    size="sm"
                    variant="outline"
                  >
                    <a
                      :href="project.githubUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center"
                    >
                      <Icon name="lucide:github" class="mr-2 size-4" />
                      Code
                    </a>
                  </UiButton>
                </div>

                <motion.div
                  :animate="{
                    x: hoveredIndex === index ? 0 : 10,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }"
                  :transition="{ duration: 0.3 }"
                >
                  <Icon
                    name="lucide:chevron-right"
                    class="size-5 text-primary"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <!-- <div class="mt-12 text-center">
        <UiButton size="lg" variant="outline">
          View All Projects
          <Icon name="lucide:chevron-right" class="ml-2 size-4" />
        </UiButton>
      </div> -->
    </div>
  </section>
</template>
