<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value: number | string
  size?: string
  thickness?: string

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

const calculatedSize = computed(() => props.size || '4rem')
const calculatedThickness = computed(() => props.thickness || 'calc(var(--size) / 10)')

const classes = computed(() => {
  return {
    'text-primary': (props.primary || props.color === 'primary'),
    'text-secondary': (props.secondary || props.color === 'secondary'),
    'text-neutral': (props.neutral || props.color === 'neutral'),
    'text-accent': (props.accent || props.color === 'accent'),
    'text-info': (props.info || props.color === 'info'),
    'text-success': (props.success || props.color === 'success'),
    'text-warning': (props.warning || props.color === 'warning'),
    'text-error': (props.error || props.color === 'error'),
  }
})
</script>

<template>
  <div class="radial-progress" :class="classes" :style="`--value:${value}; --size:${calculatedSize}; --thickness:${calculatedThickness};`">
    <slot />
  </div>
</template>
