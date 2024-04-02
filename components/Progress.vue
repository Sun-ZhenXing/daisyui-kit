<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  value: any
  max?: any

  color?: string
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  success?: boolean
  info?: boolean
  warning?: boolean
  error?: boolean
}>(), {
  value: 0,
  max: 100,
})

const classes = computed(() => {
  const { color, primary, secondary, accent, success, info, warning, error } = props
  return {
    'progress-primary': primary || color === 'primary',
    'progress-secondary': secondary || color === 'secondary',
    'progress-accent': accent || color === 'accent',
    'progress-success': success || color === 'success',
    'progress-info': info || color === 'info',
    'progress-warning': warning || color === 'warning',
    'progress-error': error || color === 'error',
  }
})
</script>

<template>
  <progress
    :value="value"
    :max="max"
    class="progress"
    :class="classes"
  />
</template>
