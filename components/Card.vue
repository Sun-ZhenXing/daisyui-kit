<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  is?: string | object | Component
  bordered?: boolean
  compact?: boolean
  side?: boolean
  imageFull?: boolean
  glass?: boolean
}>(), {
  is: 'div',
})

const classes = computed(() => {
  return {
    'card-bordered': props.bordered,
    'card-compact': props.compact,
    'card-side': props.side,
    'image-full': props.imageFull,
    'glass': props.glass,
  }
})
</script>

<template>
  <component :is="is" class="card" :class="classes">
    <slot />
  </component>
</template>
