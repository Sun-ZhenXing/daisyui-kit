<script setup lang="ts">
import Text from './Text.vue'

withDefaults(defineProps<{
  is?: string
}>(), {
  is: 'div',
})
</script>

<template>
  <Text :is="is" class="hero">
    <slot />
  </Text>
</template>
