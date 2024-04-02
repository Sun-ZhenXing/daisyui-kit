<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string
  placeholder?: string
  type?: 'text' | 'phone' | 'email' | 'search'

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
    'textarea-primary': props.primary || props.color === 'primary',
    'textarea-secondary': props.secondary || props.color === 'secondary',
    'textarea-accent': props.accent || props.color === 'accent',
    'textarea-info': props.info || props.color === 'info',
    'textarea-success': props.success || props.color === 'success',
    'textarea-warning': props.warning || props.color === 'warning',
    'textarea-error': props.error || props.color === 'error',

    'textarea-bordered': props.bordered,
    'textarea-ghost': props.ghost,

    'textarea-lg': props.lg || props.size === 'lg',
    'textarea-md': props.md || props.size === 'md',
    'textarea-sm': props.sm || props.size === 'sm',
    'textarea-xs': props.xs || props.size === 'xs',

  }
})
</script>

<template>
  <textarea
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    class="textarea"
    :class="classes"
    @input="$emit('update:modelValue', ($event.target as any).value)"
  />
</template>
