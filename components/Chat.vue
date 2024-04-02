<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  pre?: boolean
  align?: string
  start?: boolean
  end?: boolean
}>(), {
  align: 'start',
})

const classes = computed(() => {
  const { align, start, end } = props
  return {
    'chat-start': start || (!end && align === 'start'),
    'chat-end': end || align === 'end',
    'whitespace-pre': props.pre,
  }
})
</script>

<template>
  <div class="chat" :class="classes">
    <slot />
  </div>
</template>
