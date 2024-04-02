<script setup lang="ts">
import { computed } from 'vue'
import Text from './Text.vue'

const props = withDefaults(defineProps<{
  center?: boolean
  is?: string
}>(), {
  center: false,
  is: 'footer',
})

const classes = computed(() => {
  return {
    'divider-center': props.center,
  }
})
</script>

<template>
  <Text :is="is" class="footer" :class="classes">
    <slot />
  </Text>
</template>
