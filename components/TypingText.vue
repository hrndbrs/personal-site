<script setup lang="ts">
const {
  texts,
  typingSpeed = 100,
  pauseDuration = 2000,
} = defineProps<{
  texts: string[];
  typingSpeed?: number;
  pauseDuration?: number;
}>();

const displayedText = ref("");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];
  if (isDeleting) {
    charIndex--;
    displayedText.value = currentText.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
    setTimeout(type, typingSpeed / 2);
  } else {
    charIndex++;
    displayedText.value = currentText.substring(0, charIndex);
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, pauseDuration);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

onMounted(() => {
  type();
});
</script>

<template>
  <span :class="displayedText.length > 0 ? 'typing-container' : 'opacity-0'">
    {{ displayedText || "-" }}
  </span>
</template>
