<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  vertical?: boolean
  horizontal?: boolean
}>()

const classes = computed(() => {
  return {
    'steps-vertical': props.vertical,
    'steps-horizontal': props.horizontal,
  }
})
</script>

<template>
  <ul class="steps" :class="classes">
    <slot />
  </ul>
</template>
