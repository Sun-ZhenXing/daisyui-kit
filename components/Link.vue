<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  is?: string
  hover?: boolean

  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'info' | 'warning' | 'error'
  neutral?: boolean
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  success?: boolean
  info?: boolean
  warning?: boolean
  error?: boolean
}>(), {
  is: 'a',
})

const classes = computed(() => {
  return {
    'link-neutral': props.neutral || props.color === 'neutral',
    'link-primary': props.primary || props.color === 'primary',
    'link-secondary': props.secondary || props.color === 'secondary',
    'link-accent': props.accent || props.color === 'accent',
    'link-success': props.success || props.color === 'success',
    'link-info': props.info || props.color === 'info',
    'link-warning': props.warning || props.color === 'warning',
    'link-error': props.error || props.color === 'error',
    'link-hover': props.hover,
  }
})
</script>

<template>
  <component :is="is" class="link" :class="classes">
    <slot />
  </component>
</template>
