<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: any
  disabled?: boolean

  color?: string
  neutral?: boolean
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  success?: boolean
  info?: boolean
  warning?: boolean
  error?: boolean

  size?: string
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const classes = computed(() => {
  const { color, neutral, primary, secondary, accent, success, info, warning, error, size, xs, sm, md, lg } = props
  return {
    'toggle-neutral': neutral || color === 'neutral',
    'toggle-primary': primary || color === 'primary',
    'toggle-secondary': secondary || color === 'secondary',
    'toggle-accent': accent || color === 'accent',
    'toggle-success': success || color === 'success',
    'toggle-info': info || color === 'info',
    'toggle-warning': warning || color === 'warning',
    'toggle-error': error || color === 'error',
    'toggle-xs': xs || size === 'xs',
    'toggle-sm': sm || size === 'sm',
    'toggle-md': md || size === 'md',
    'toggle-lg': lg || size === 'lg',
  }
})

const currentValue = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val),
})
</script>

<template>
  <input
    v-model="currentValue"
    type="checkbox"
    v-bind="$attrs"
    class="toggle"
    :disabled="disabled"
    :class="classes"
  >
</template>
