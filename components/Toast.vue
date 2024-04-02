<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  hAlign?: 'start' | 'center' | 'end'
  start?: boolean
  center?: boolean
  end?: boolean

  vAlign?: 'top' | 'middle' | 'bottom'
  top?: boolean
  middle?: boolean
  bottom?: boolean
}>()
const classes = computed(() => {
  return {
    'toast-start': props.start || props.hAlign === 'start',
    'toast-center': props.center || props.hAlign === 'center',
    'toast-end': props.end || props.hAlign === 'end',
    'toast-top': props.top || props.vAlign === 'top',
    'toast-middle': props.middle || props.vAlign === 'middle',
    'toast-bottom': props.bottom || props.vAlign === 'bottom',
  }
})
</script>

<template>
  <div class="toast" :class="classes">
    <slot />
  </div>
</template>
