<script setup lang="ts">
import { computed, provide } from 'vue'

const props = defineProps<{
  align?: 'vertical' | 'horizontal'
  vertical?: boolean
  horizontal?: boolean

  size?: | 'lg' | 'md' | 'sm' | 'xs'
  lg?: boolean
  md?: boolean
  sm?: boolean
  xs?: boolean
}>()

provide('withinExpand', false)

// `normal` and `compact` provide backwards compatibility with DaisyUI 2.x
const classes = computed(() => {
  return {
    'menu-vertical': props.vertical || props.align === 'vertical',
    'menu-horizontal': props.horizontal || props.align === 'horizontal',
    'menu-lg': props.lg || props.size === 'lg',
    'menu-md': props.md || props.size === 'md',
    'menu-sm': props.sm || props.size === 'sm',
    'menu-xs': props.xs || props.size === 'xs',
  }
})
</script>

<template>
  <ul class="menu" :class="classes">
    <slot />
  </ul>
</template>
