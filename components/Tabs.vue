<script setup lang="ts">
import { computed, inject } from 'vue'
import Tab from './Tab.vue'

const props = withDefaults(defineProps<{
  is?: string | object | Component
  tabs?: string[]

  variant?: 'bordered' | 'lifted' | 'boxed' | 'inline-boxed'
  bordered?: boolean
  lifted?: boolean
  boxed?: boolean
  inlineBoxed?: boolean

  size?: 'lg' | 'md' | 'sm' | 'xs'
  lg?: boolean
  md?: boolean
  sm?: boolean
  xs?: boolean
}>(), {
  is: 'a',
  tabs: [] as any,
})

const tabManager: any = inject('tabManager')

const _variant = computed(() => {
  if (props.bordered || props.variant === 'bordered')
    return 'bordered'
  if (props.lifted || props.variant === 'lifted')
    return 'lifted'
  return undefined
})
const _size = computed(() => {
  if (props.size)
    return props.size
  if (props.lg)
    return 'lg'
  if (props.md)
    return 'md'
  if (props.sm)
    return 'sm'
  if (props.xs)
    return 'xs'
  return 'md'
})

const classes = computed(() => {
  return {
    'tabs-boxed':
      props.variant === 'boxed'
      || props.variant === 'inline-boxed'
      || props.boxed
      || props.inlineBoxed,
    'inline-block': props.variant === 'inline-boxed' || props.inlineBoxed,
  }
})
</script>

<template>
  <div class="tabs" :class="classes">
    <slot v-if="$slots.default" />
    <template v-for="tabName in tabs" v-else :key="tabName">
      <Tab
        :is="is"
        :name="tabName"
        :variant="_variant"
        :size="_size"
        :active="tabManager.currentTab === tabName"
        @click="() => (tabManager.currentTab = tabName)"
      >
        {{ tabName }}
      </Tab>
    </template>
    <div v-if="variant === 'lifted' || lifted" class="flex-1 cursor-default tab tab-lifted" />
  </div>
</template>
