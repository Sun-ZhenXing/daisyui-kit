<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: number | string
  min?: number | string
  max?: number | string
  step?: number | string
  disabled?: boolean

  color?: string
  neutral?: boolean
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  success?: boolean
  warning?: boolean
  info?: boolean
  error?: boolean

  size?: 'lg' | 'md' | 'sm' | 'xs'
  lg?: boolean
  md?: boolean
  sm?: boolean
  xs?: boolean
}>()
defineEmits(['update:modelValue'])

const classes = computed(() => {
  const { color, neutral, primary, secondary, accent, success, info, warning, error, size, lg, md, sm, xs } = props
  return {
    'range-neutral': neutral || color === 'neutral',
    'range-primary': primary || color === 'primary',
    'range-secondary': secondary || color === 'secondary',
    'range-accent': accent || color === 'accent',
    'range-success': success || color === 'success',
    'range-info': info || color === 'info',
    'range-warning': warning || color === 'warning',
    'range-error': error || color === 'error',
    'range-lg': lg || size === 'lg',
    'range-md': md || size === 'md',
    'range-sm': sm || size === 'sm',
    'range-xs': xs || size === 'xs',
  }
})
</script>

<template>
  <input
    type="range"
    class="range"
    :class="classes"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as any).value)"
  >
</template>
