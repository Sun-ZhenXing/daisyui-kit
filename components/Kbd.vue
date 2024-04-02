<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  size?: 'lg' | 'md' | 'sm' | 'xs'
  lg?: boolean
  md?: boolean
  sm?: boolean
  xs?: boolean
}>()

const classes = computed(() => {
  const { size, lg, md, sm, xs } = props
  return {
    'kbd-lg': lg || size === 'lg',
    'kbd-md': md || size === 'md',
    'kbd-sm': sm || size === 'sm',
    'kbd-xs': xs || size === 'xs',
  }
})
</script>

<template>
  <kbd class="kbd" :class="classes"><slot /></kbd>
</template>
