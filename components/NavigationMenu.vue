<script setup lang="ts">
import { useScroll, useWindowScroll } from "@vueuse/core";

const navItems = [
  { name: "Home", href: "#home", icon: "lucide:house" },
  { name: "About", href: "#about", icon: "lucide:user" },
  {
    name: "Career & Education",
    href: "#history",
    icon: "lucide:graduation-cap",
  },
  { name: "Skills", href: "#skills", icon: "lucide:code" },
  { name: "Projects", href: "#projects", icon: "lucide:folder-kanban" },
  { name: "Contact", href: "#contact", icon: "lucide:mail" },
];

const getSectionId = (href: string) => {
  return href.replace("#", "");
};

const isOpen = ref(false);
const activeSection = ref(getSectionId(navItems[0].href));
const { y: scrollY } = useWindowScroll();

const isScrolled = computed(() => scrollY.value > 50);

useScroll(window, {
  onScroll: () => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const scrollPosition = scrollY.value + 100;

    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id") || "";

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        activeSection.value = sectionId;
        return;
      }
    }
  },
});

const scrollToSection = (href: string) => {
  document.querySelector(href)?.scrollIntoView({
    behavior: "smooth",
  });
  isOpen.value = false;
};
</script>

<template>
  <!-- Desktop sidebar navigation -->
  <div
    class="fixed left-0 top-0 z-40 hidden md:flex h-screen w-16 flex-col items-center justify-center bg-background/80 backdrop-blur-md shadow-sm py-6"
  >
    <NuxtLink to="#home" class="flex items-center justify-center size-10">
      <Icon
        name="local:logo"
        class="size-10 text-primary/90 transition-color duration-300 hover:text-primary"
      />
    </NuxtLink>

    <ul
      class="flex flex-col items-center space-y-8 flex-1 justify-center overflow-y-auto"
    >
      <li v-for="item in navItems" :key="item.name">
        <UTooltip
          :text="item.name"
          :content="{
            align: 'center',
            side: 'right',
            sideOffset: 4,
          }"
        >
          <NuxtLink
            :to="item.href"
            class="relative flex size-10 items-center justify-center rounded-md transition-colors"
            :class="[
              activeSection === getSectionId(item.href)
                ? 'text-primary bg-primary/10'
                : 'text-white hover:text-primary hover:bg-primary/5',
            ]"
            @click.prevent="scrollToSection(item.href)"
          >
            <Icon :name="item.icon" class="size-5" />
            <div
              v-if="activeSection === getSectionId(item.href)"
              class="absolute left-0 top-0 h-full w-1 rounded-r-md bg-primary"
            />
          </NuxtLink>
        </UTooltip>
      </li>
    </ul>

    <LangButton />
  </div>

  <!-- Mobile top navigation -->
  <header
    class="block md:hidden fixed top-0 z-40 w-full transition-all duration-300"
    :class="isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'"
  >
    <div class="container flex items-center justify-between px-4 py-2">
      <NuxtLink
        to="#home"
        class="size-14 inline-flex items-center justify-center"
      >
        <Icon name="local:logo" class="size-8 text-primary" />
      </NuxtLink>

      <div class="flex items-center gap-4">
        <LangButton />
        <!-- Mobile Menu Button -->
        <UiButton
          variant="ghost"
          size="icon"
          :aria-label="isOpen ? 'Close menu' : 'Open menu'"
          @click="isOpen = !isOpen"
        >
          <Icon
            :name="isOpen ? 'lucide:x' : 'lucide:menu'"
            class="size-5 transition-transform duration-200"
            :class="[isOpen ? 'rotate-90' : 'rotate-0']"
          />
        </UiButton>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div
          v-if="isOpen"
          class="absolute left-0 bottom-0 translate-y-full z-50 w-full bg-background/95 backdrop-blur-md"
        >
          <nav class="container px-4 py-6">
            <ul class="flex flex-col space-y-4">
              <li v-for="item in navItems" :key="item.name">
                <NuxtLink
                  :to="item.href"
                  class="flex items-center gap-3 py-2 text-lg font-medium transition-colors hover:text-primary"
                  :class="[
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary'
                      : 'text-white',
                  ]"
                  @click.prevent="
                    () => {
                      scrollToSection(item.href);
                      isOpen = false;
                    }
                  "
                >
                  <Icon :name="item.icon" class="size-5" />
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>
