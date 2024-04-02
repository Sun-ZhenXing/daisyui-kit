<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  glyph?: string

  color?: string
  neutral?: boolean
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
}>()

const classes = computed(() => {
  return {
    'step-neutral': props.neutral || props.color === 'neutral',
    'step-primary': props.primary || props.color === 'primary',
    'step-secondary': props.secondary || props.color === 'secondary',
    'step-accent': props.accent || props.color === 'accent',
    'step-info': props.info || props.color === 'info',
    'step-success': props.success || props.color === 'success',
    'step-warning': props.warning || props.color === 'warning',
    'step-error': props.error || props.color === 'error',
  }
})
</script>

<template>
  <li class="step" :class="classes" :data-content="glyph">
    <slot />
  </li>
</template>
