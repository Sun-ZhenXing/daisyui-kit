<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  tip?: string | number
  open?: boolean

  color?: string
  neutral?: boolean
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean

  position?: 'top' | 'right' | 'bottom' | 'left'
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}>()
const classes = computed(() => {
  return {
    'tooltip-open': props.open,
    'tooltip-top': props.top || props.position === 'top',
    'tooltip-bottom': props.bottom || props.position === 'bottom',
    'tooltip-left': props.left || props.position === 'left',
    'tooltip-right': props.right || props.position === 'right',
    'tooltip-primary': props.primary || props.color === 'primary',
    'tooltip-secondary': props.secondary || props.color === 'secondary',
    'tooltip-neutral': props.neutral || props.color === 'neutral',
    'tooltip-accent': props.accent || props.color === 'accent',
    'tooltip-info': props.info || props.color === 'info',
    'tooltip-success': props.success || props.color === 'success',
    'tooltip-warning': props.warning || props.color === 'warning',
    'tooltip-error': props.error || props.color === 'error',
  }
})
</script>

<template>
  <div :data-tip="tip" class="tooltip" :class="classes">
    <slot />
  </div>
</template>
