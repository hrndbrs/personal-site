<script setup lang="ts">
import { motion } from "motion-v";
import { EducationType } from "~/utils/types/history.type";

const activeTab = ref<"education" | "experience">("education");
const slideDirection = ref<"left" | "right">("left");

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = useElementVisibility(sectionRef);

const { t } = useI18n();

const handleTabChange = (tab: "education" | "experience") => {
  if (tab === activeTab.value) return;
  slideDirection.value = tab === "education" ? "right" : "left";
  activeTab.value = tab;
};
</script>

<template>
  <section id="history" class="relative py-24 md:py-32 overflow-x-clip">
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
          {{ t("History.title") }}
        </motion.h2>

        <motion.h3
          class="mb-6 text-3xl font-bold tracking-tight md:text-4xl"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: false, margin: '-100px' }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          {{ t("History.header") }}
        </motion.h3>

        <motion.p
          class="mx-auto mb-12 max-w-2xl text-muted-foreground"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :animate="{ opacity: 1, y: 0 }"
          :viewport="{ once: false, margin: '-100px' }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          {{ t("History.description") }}
        </motion.p>
      </div>

      <motion.div
        ref="sectionRef"
        :variants="{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.33, 1, 0.68, 1],
            },
          },
        }"
        initial="hidden"
        :animate="isVisible ? 'visible' : 'hidden'"
      >
        <!-- Tab Navigation -->
        <div class="flex justify-center mb-12">
          <div class="inline-flex gap-2 p-1.5 rounded-xl flex-col md:flex-row">
            <UiButton
              variant="ghost"
              :class="`rounded-lg px-6 py-2.5 text-base transition-all ${
                activeTab === 'education'
                  ? 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90'
                  : 'text-muted-foreground hover:text-foreground bg-transparent'
              }`"
              @click="handleTabChange('education')"
            >
              <Icon name="lucide:graduation-cap" class="size-5 mr-2" />
              {{ t("History.education.title") }}
            </UiButton>
            <UiButton
              variant="ghost"
              :class="`rounded-lg px-6 py-2.5 text-base transition-all ${
                activeTab === 'experience'
                  ? 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90'
                  : 'text-muted-foreground hover:text-foreground bg-transparent'
              }`"
              @click="handleTabChange('experience')"
            >
              <Icon name="lucide:briefcase" class="size-5 mr-2" />
              {{ t("History.experience.title") }}
            </UiButton>
          </div>
        </div>

        <!-- Content container with relative positioning for animation -->
        <div class="relative">
          <Transition
            :enter-active-class="
              slideDirection === 'left' ? 'enter-from-right' : 'enter-from-left'
            "
            :leave-active-class="
              slideDirection === 'left' ? 'exit-to-right' : 'exit-to-left'
            "
            mode="out-in"
          >
            <!-- Education & Certifications Tab -->
            <div
              v-if="activeTab === 'education'"
              key="education"
              class="w-full"
            >
              <div
                class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
              >
                <motion.div
                  v-for="item in education"
                  :key="item.title"
                  :initial="{ opacity: 0 }"
                  :animate="{ opacity: 1 }"
                  :transition="{ duration: 0.5 }"
                  class="group relative rounded-lg border border-border/50 bg-card/50 p-0 backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
                >
                  <div class="flex flex-col gap-4 justify-between p-6 h-full">
                    <div class="flex items-center flex-1">
                      <div
                        class="mr-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
                      >
                        <Icon
                          :name="
                            item.type === EducationType.EDUCATION
                              ? 'lucide:graduation-cap'
                              : 'lucide:award'
                          "
                          class="size-5"
                        />
                      </div>
                      <div>
                        <h3 class="font-medium text-lg text-foreground">
                          {{ item.title }}
                        </h3>
                        <p class="text-muted-foreground">
                          {{ item.institution }} • {{ item.period }}
                        </p>
                      </div>
                    </div>
                    <a v-if="item.url" :href="item.url" target="_blank">
                      <UiButton
                        variant="outline"
                        size="sm"
                        class="mt-2 border-border hover:bg-primary/10 text-foreground"
                      >
                        <Icon name="lucide:external-link" class="size-4 mr-2" />
                        {{ t(`History.education.view.${item.type}`) }}
                      </UiButton>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            <!-- Work Experience Tab -->
            <div v-else key="experience" class="w-full">
              <div class="relative max-w-5xl mx-auto">
                <!-- Timeline line -->
                <span
                  class="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"
                />

                <motion.div
                  v-for="(exp, index) in workExperiences"
                  :key="index"
                  :initial="{ opacity: 0, x: -20 }"
                  :animate="{ opacity: 1, x: 0 }"
                  :transition="{ duration: 0.5, delay: index * 0.1 }"
                  class="mb-12 relative"
                >
                  <!-- Timeline dot -->
                  <div
                    class="absolute left-8 size-4 rounded-full bg-primary transform -translate-x-1/2 hidden md:block"
                  />

                  <div class="md:ml-20">
                    <div
                      class="group relative rounded-lg border border-border/50 bg-card/50 p-0 backdrop-blur-sm"
                    >
                      <div class="p-6">
                        <div class="mb-6">
                          <div class="flex items-center mb-2">
                            <div
                              class="mr-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
                            >
                              <Icon name="lucide:briefcase" class="size-5" />
                            </div>
                            <h3 class="font-medium text-xl text-foreground">
                              {{ exp.position }}
                            </h3>
                          </div>
                          <div
                            class="flex items-center text-muted-foreground mt-1"
                          >
                            <span class="mr-4">{{ exp.company }}</span>
                            <div class="flex items-center">
                              <Icon
                                name="lucide:calendar"
                                class="size-4 mr-1"
                              />
                              <span>{{ exp.period }}</span>
                            </div>
                          </div>
                        </div>
                        <p class="text-muted-foreground mb-6 leading-relaxed">
                          {{ exp.description }}
                        </p>
                        <div v-if="exp.keypoints.length > 0">
                          <h4 class="font-medium text-foreground mb-3">
                            Key Achievements:
                          </h4>
                          <ul
                            class="list-none pl-0 text-muted-foreground space-y-2"
                          >
                            <li
                              v-for="(keypoint, i) in exp.keypoints"
                              :key="i"
                              class="flex items-start"
                            >
                              <span
                                class="inline-block size-1.5 rounded-full bg-primary mt-2 mr-2"
                              />
                              <span>{{ keypoint }}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Transition>
        </div>
      </motion.div>
    </div>
  </section>
</template>

<style scoped>
.enter-from-left {
  animation: enterFromLeft 0.3s ease-out;
}

.enter-from-right {
  animation: enterFromRight 0.3s ease-out;
}

.exit-to-left {
  animation: exitToLeft 0.3s ease-in;
}

.exit-to-right {
  animation: exitToRight 0.3s ease-in;
}

@keyframes enterFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes enterFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes exitToLeft {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}

@keyframes exitToRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
