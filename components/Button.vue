<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  is?: string
  join?: boolean

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
  link?: boolean
  glass?: boolean
  outline?: boolean
  disabled?: boolean

  shape?: 'circle' | 'square' | 'wide' | 'block'
  circle?: boolean
  square?: boolean
  wide?: boolean
  block?: boolean

  noAnimation?: boolean
  active?: boolean

  size?: 'lg' | 'md' | 'sm' | 'xs'
  lg?: boolean
  md?: boolean
  sm?: boolean
  xs?: boolean

  type?: 'button' | 'submit' | 'reset'
}>()

const classes = computed(() => {
  return {
    'join-item': props.join,

    'btn-primary': !props.disabled && (props.primary || props.color === 'primary'),
    'btn-secondary': !props.disabled && (props.secondary || props.color === 'secondary'),
    'btn-neutral': !props.disabled && (props.neutral || props.color === 'neutral'),
    'btn-accent': !props.disabled && (props.accent || props.color === 'accent'),
    'btn-info': !props.disabled && (props.info || props.color === 'info'),
    'btn-success': !props.disabled && (props.success || props.color === 'success'),
    'btn-warning': !props.disabled && (props.warning || props.color === 'warning'),
    'btn-error': !props.disabled && (props.error || props.color === 'error'),

    'text-primary': !props.disabled && (props.primary || props.color === 'primary') && props.link,
    'text-secondary': !props.disabled && (props.secondary || props.color === 'secondary') && props.link,
    'text-neutral': !props.disabled && (props.neutral || props.color === 'neutral') && props.link,
    'text-accent': !props.disabled && (props.accent || props.color === 'accent') && props.link,
    'text-info': !props.disabled && (props.info || props.color === 'info') && props.link,
    'text-success': !props.disabled && (props.success || props.color === 'success') && props.link,
    'text-warning': !props.disabled && (props.warning || props.color === 'warning') && props.link,
    'text-error': !props.disabled && (props.error || props.color === 'error') && props.link,

    'glass': !props.disabled && props.glass,

    'btn-circle': props.circle || props.shape === 'circle',
    'btn-square': props.square || props.shape === 'square',
    'btn-wide': props.wide || props.shape === 'wide',
    'btn-block': props.block || props.shape === 'block',

    'btn-lg': props.lg || props.size === 'lg',
    'btn-md': props.md || props.size === 'md',
    'btn-sm': props.sm || props.size === 'sm',
    'btn-xs': props.xs || props.size === 'xs',

    'btn-outline': !props.disabled && props.outline,
    'btn-ghost': !props.disabled && props.ghost,
    'btn-link': !props.disabled && props.link,
    'btn-disabled': props.disabled,

    'no-animation': props.noAnimation,
    'btn-active': !props.disabled && props.active,
  }
})

// Accessibility-friendly attributes for disabling the button
const disabledAttrs = computed(() => {
  if (props.disabled) {
    return {
      'tabindex': -1,
      'role': 'button',
      'aria-disabled': true,
    }
  }
  else {
    return {}
  }
})
</script>

<template>
  <component
    :is="is || 'button'"
    :type="type"
    class="btn"
    :class="[classes]"
    v-bind="{ ...disabledAttrs, ...$attrs }"
  >
    <slot />
  </component>
</template>
