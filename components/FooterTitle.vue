<script setup lang="ts">
import Text from './Text.vue'

withDefaults(defineProps<{
  is?: string
}>(), {
  is: 'span',
})
</script>

<template>
  <Text :is="is" class="footer-title">
    <slot />
  </Text>
</template>
