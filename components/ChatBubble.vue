<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
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
  <div class="chat-bubble" :class="classes">
    <slot />
  </div>
</template>
