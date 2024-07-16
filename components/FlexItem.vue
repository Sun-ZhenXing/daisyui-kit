<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  is?: string | object | Component
  join?: boolean

  // https://tailwindcss.com/docs/flex
  flex?: boolean
  flex1?: boolean
  flexAuto?: boolean
  flexInitial?: boolean
  none?: boolean

  grow?: boolean

  // https://tailwindcss.com/docs/flex-direction
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  row?: boolean
  col?: boolean
  reverse?: boolean

  // https://tailwindcss.com/docs/flex-wrap
  wrap?: boolean
  nowrap?: boolean
  wrapReverse?: boolean
}>(), {
  is: 'div',
  flex: false,
})

const classes = computed(() => {
  return {
    'join-item': props.join,

    'flex-1': props.flex1,
    'flex-auto': props.flexAuto,
    'flex-initial': props.flexInitial,
    'flex-none': props.none,

    'flex-grow': props.grow,

    'flex-row': props.direction === 'row' || props.row,
    'flex-col': props.direction === 'col' || props.col,
    'flex-row-reverse': props.direction === 'row-reverse' || (props.row && props.reverse),
    'flex-col-reverse': props.direction === 'col-reverse' || (props.col && props.reverse),

    'flex-wrap': props.wrap,
    'flex-wrap-reverse': props.wrapReverse,
    'flex-nowrap': props.nowrap,
  }
})
</script>

<template>
  <component :is="is" class="flex" :class="classes">
    <slot />
  </component>
</template>
