<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  horizontal?: boolean
  vertical?: boolean
}>(), {
  horizontal: false,
  vertical: false,
})

const classes = computed(() => {
  return {
    'divider-horizontal': props.horizontal,
    'divider-vertical': props.vertical,
  }
})
</script>

<template>
  <div class="divider" :class="classes">
    <slot />
  </div>
</template>
