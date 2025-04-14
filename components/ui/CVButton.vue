<script setup lang="ts">
const openCV = () => {
  window.open(
    "https://drive.google.com/file/d/1GIO1NdNLml1VHt5ENM4P2hR0ZFztdmor/view?usp=sharing",
    "_blank"
  );
};
</script>

<template>
  <button
    class="relative flex size-10 items-center justify-center rounded-md transition-colors cursor-pointer"
    :class="['text-white hover:text-primary hover:bg-primary/5']"
    aria-label="View CV"
    @click="openCV"
  >
    <Icon name="lucide:file-text" class="size-5" />
  </button>
</template>
