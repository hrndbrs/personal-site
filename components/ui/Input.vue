<script setup lang="ts">
const {
  class: className = "",
  type = "text",
  modelValue = "",
} = defineProps<{
  modelValue?: string;
  type?: string;
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
  <component
    :is="'input'"
    :value="modelValue"
    :type="type"
    :class="
      cn([
        'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      ])
    "
    @input="handleUpdate($event)"
  >
    <slot />
  </component>
</template>
