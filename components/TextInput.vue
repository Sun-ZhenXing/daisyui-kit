<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string | number
  placeholder?: string
  type?: 'text' | 'phone' | 'email' | 'search' | 'password' | 'number'
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
}>(), {
  type: 'text',
})
defineEmits(['update:modelValue'])

const classes = computed(() => {
  return {
    'join-item': props.join,

    'input-primary': props.primary || props.color === 'primary',
    'input-secondary': props.secondary || props.color === 'secondary',
    'input-accent': props.accent || props.color === 'accent',
    'input-info': props.info || props.color === 'info',
    'input-success': props.success || props.color === 'success',
    'input-warning': props.warning || props.color === 'warning',
    'input-error': props.error || props.color === 'error',

    'input-lg': props.lg || props.size === 'lg',
    'input-md': props.md || props.size === 'md',
    'input-sm': props.sm || props.size === 'sm',
    'input-xs': props.xs || props.size === 'xs',

    'input-bordered': props.bordered,
    'input-ghost': props.ghost,
  }
})
</script>

<template>
  <input
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    class="input"
    :class="classes"
    @input="$emit('update:modelValue', ($event.target as any).value)"
  >
</template>
