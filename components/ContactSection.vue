<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import { motion } from "motion-v";
import { contactSchema } from "~/utils/schemas/contact.schema";
import type { FormSubmitEvent } from "@nuxt/ui";
import type { ContactSchema } from "~/utils/schemas/contact.schema";

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = useElementVisibility(sectionRef);

const { t } = useI18n();

const form = reactive<ContactSchema>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
};

const handleSubmit = async (e: FormSubmitEvent<ContactSchema>) => {
  e.preventDefault();
  isSubmitting.value = true;
  submitSuccess.value = false;

  const a = document.createElement("a");
  const body =
    `${form.message}\n\nFrom:\n${form.name}\n${form.email}`.replaceAll(
      "\n",
      "%0D%0A"
    );

  a.href = `mailto:${staticData.email}?subject=${form.subject}&body=${body}`;
  a.click();
  a.remove();

  isSubmitting.value = false;
};
</script>

<template>
  <section id="contact" class="relative py-24 md:py-32">
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
          {{ t("Contact.title") }}
        </motion.h2>

        <motion.h3
          class="mb-6 text-3xl font-bold tracking-tight md:text-4xl"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: false, margin: '-100px' }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          {{ t("Contact.header") }}
        </motion.h3>

        <motion.p
          class="mx-auto mb-12 max-w-2xl text-muted-foreground"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: false, margin: '-100px' }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          {{ t("Contact.description") }}
        </motion.p>
      </div>

      <motion.div
        ref="sectionRef"
        class="mx-auto grid max-w-4xl gap-8 md:grid-cols-5"
        :variants="containerVariants"
        initial="hidden"
        :animate="isVisible ? 'visible' : 'hidden'"
      >
        <motion.div class="md:col-span-2" :variants="itemVariants">
          <div class="space-y-6">
            <div class="flex items-start">
              <div
                class="mr-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
              >
                <Icon name="lucide:mail" class="size-5" />
              </div>
              <div>
                <h4 class="font-medium">{{ t("About.email.title") }}</h4>
                <p class="text-muted-foreground">{{ staticData.email }}</p>
              </div>
            </div>

            <div class="flex items-start">
              <div
                class="mr-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
              >
                <Icon name="lucide:map-pin" class="size-5" />
              </div>
              <div>
                <h4 class="font-medium">{{ t("About.location.title") }}</h4>
                <p class="text-muted-foreground">
                  {{ t("About.location.value") }}
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div
                class="mr-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
              >
                <Icon name="lucide:phone" class="size-5" />
              </div>
              <div>
                <h4 class="font-medium">{{ t("About.phone.title") }}</h4>
                <p class="text-muted-foreground">
                  {{ staticData.phone }}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div class="md:col-span-3" :variants="itemVariants">
          <UForm
            class="space-y-4"
            :schema="contactSchema"
            :state="form"
            @submit="handleSubmit"
          >
            <div class="grid gap-4 sm:grid-cols-2">
              <UFormField name="name">
                <label for="name" class="sr-only">Name</label>
                <UiInput
                  id="name"
                  v-model="form.name"
                  :placeholder="t('Contact.fields.name')"
                />
              </UFormField>
              <UFormField name="email">
                <label for="email" class="sr-only">Email</label>
                <UiInput
                  id="email"
                  v-model="form.email"
                  type="email"
                  :placeholder="t('Contact.fields.email')"
                  class="w-full"
                />
              </UFormField>
            </div>

            <UFormField name="subject">
              <label for="subject" class="sr-only">Subject</label>
              <UiInput
                id="subject"
                v-model="form.subject"
                :placeholder="t('Contact.fields.subject')"
                class="w-full"
              />
            </UFormField>

            <UFormField name="message">
              <label for="message" class="sr-only">Message</label>
              <UiTextarea
                id="message"
                v-model="form.message"
                class="w-full"
                :placeholder="t('Contact.fields.message')"
                :rows="5"
              />
            </UFormField>

            <div v-if="submitSuccess" class="text-sm text-primary">
              {{ t("Contact.success") }}
            </div>

            <UiButton
              type="submit"
              class="w-full sm:w-auto"
              :disabled="isSubmitting"
            >
              {{ t("Contact.button") }}
              <Icon name="lucide:send" class="size-4" />
            </UiButton>
          </UForm>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>
