<script setup lang="ts">
const { class: className = "", modelValue = "" } = defineProps<{
  modelValue?: string;
  class?: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const handleUpdate = (event: Event) => {
  emit("update:modelValue", String((event.target as HTMLInputElement).value));
};
</script>

<template>
  <textarea
    :value="modelValue"
    :class="[
      'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      className,
    ]"
    @input="handleUpdate($event)"
  />
</template>
