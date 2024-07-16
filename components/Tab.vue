<script setup lang="ts">
import { computed, inject } from 'vue'

const props = withDefaults(defineProps<{
  is?: string | object | Component
  name?: string
  active?: boolean

  variant?: 'bordered' | 'lifted'
  bordered?: boolean
  lifted?: boolean

  size?: 'lg' | 'md' | 'sm' | 'xs'
  lg?: boolean
  md?: boolean
  sm?: boolean
  xs?: boolean
}>(), {
  is: 'a',
})

const manager: any = inject('tabManager')

const classes = computed(() => {
  return {
    'tab-active': props.active || manager.currentTab === props.name,

    'tab-lg': props.size === 'lg' || props.lg,
    'tab-md': props.size === 'md' || props.md,
    'tab-sm': props.size === 'sm' || props.sm,
    'tab-xs': props.size === 'xs' || props.xs,

    'tab-bordered': props.variant === 'bordered' || props.bordered,
    'tab-lifted': props.variant === 'lifted' || props.lifted,
  }
})
</script>

<template>
  <component
    :is="is" class="tab" :class="classes" tabindex="0"
    @click="() => (manager.currentTab = name)"
    @keypress.enter="() => (manager.currentTab = name)"
  >
    <slot v-if="$slots.default" />
    <span v-else>{{ name }}</span>
  </component>
</template>
