<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  outline?: boolean

  size?: string
  lg?: boolean
  md?: boolean
  sm?: boolean
  xs?: boolean

  color?: string
  neutral?: boolean
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean

  ghost?: boolean
}>()

const classes = computed(() => {
  return {
    'badge-outline': props.outline,
    'badge-ghost': props.ghost,
    'badge-lg': props.lg || props.size === 'lg',
    'badge-md': props.md || props.size === 'md',
    'badge-sm': props.sm || props.size === 'sm',
    'badge-xs': props.xs || props.size === 'xs',
    'badge-neutral': props.neutral || props.color === 'neutral',
    'badge-primary': props.primary || props.color === 'primary',
    'badge-secondary': props.secondary || props.color === 'secondary',
    'badge-accent': props.accent || props.color === 'accent',
    'badge-info': props.info || props.color === 'info',
    'badge-success': props.success || props.color === 'success',
    'badge-warning': props.warning || props.color === 'warning',
    'badge-error': props.error || props.color === 'error',
  }
})
</script>

<template>
  <div class="badge" :class="classes">
    <slot />
  </div>
</template>
