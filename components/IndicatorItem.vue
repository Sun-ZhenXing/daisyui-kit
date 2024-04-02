<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  is?: string

  align?: 'start' | 'center' | 'end'
  start?: boolean
  center?: boolean
  end?: boolean

  vAlign?: 'top' | 'middle' | 'bottom'
  top?: boolean
  middle?: boolean
  bottom?: boolean
}>(), {
  is: 'div',
})
const classes = computed(() => {
  return {
    'indicator-start': props.start || props.align === 'start',
    'indicator-center': props.center || props.align === 'center',
    'indicator-end': props.end || props.align === 'end',

    'indicator-top': props.top || props.vAlign === 'top',
    'indicator-middle': props.middle || props.vAlign === 'middle',
    'indicator-bottom': props.bottom || props.vAlign === 'bottom',
  }
})
</script>

<template>
  <component :is="is" class="indicator-item" :class="classes">
    <slot />
  </component>
</template>
