<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  size?: string
  lg?: boolean
  md?: boolean
  sm?: boolean
  xs?: boolean
}>()
const classes = computed(() => {
  return {
    'btm-nav-lg': props.lg || props.size === 'lg',
    'btm-nav-md': props.md || props.size === 'md',
    'btm-nav-sm': props.sm || props.size === 'sm',
    'btm-nav-xs': props.xs || props.size === 'xs',
  }
})
</script>

<template>
  <div class="btm-nav" :class="classes">
    <slot />
  </div>
</template>
