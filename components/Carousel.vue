<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  snapTo?: 'center' | 'end'
  center?: boolean
  end?: boolean
  vertical?: boolean
}>()

const classes = computed(() => {
  const { snapTo, center, end, vertical } = props
  return {
    'carousel-center': center || snapTo === 'center',
    'carousel-end': end || snapTo === 'end',
    'carousel-vertical': vertical,
  }
})
</script>

<template>
  <div class="carousel" :class="classes">
    <slot />
  </div>
</template>
