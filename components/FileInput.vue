<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  join?: boolean

  color?: string
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean

  bordered?: boolean
  ghost?: boolean
  disabled?: boolean

  size?: 'lg' | 'md' | 'sm' | 'xs'
  lg?: boolean
  md?: boolean
  sm?: boolean
  xs?: boolean
}>()
defineEmits(['files'])

const classes = computed(() => {
  return {
    'join-item': props.join,

    'file-input-primary': props.primary || props.color === 'primary',
    'file-input-secondary': props.secondary || props.color === 'secondary',
    'file-input-accent': props.accent || props.color === 'accent',
    'file-input-info': props.info || props.color === 'info',
    'file-input-success': props.success || props.color === 'success',
    'file-input-warning': props.warning || props.color === 'warning',
    'file-input-error': props.error || props.color === 'error',

    'file-input-lg': props.lg || props.size === 'lg',
    'file-input-md': props.md || props.size === 'md',
    'file-input-sm': props.sm || props.size === 'sm',
    'file-input-xs': props.xs || props.size === 'xs',

    'file-input-bordered': props.bordered,
    'file-input-ghost': props.ghost,
  }
})
</script>

<template>
  <input
    type="file"
    :disabled="disabled"
    class="file-input"
    :class="classes"
    @input="$emit('files', ($event.target as any).value)"
  >
</template>
