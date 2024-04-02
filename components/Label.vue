<script setup lang="ts">
import Text from './Text.vue'

withDefaults(defineProps<{
  is?: string
}>(), {
  is: 'label',
})
</script>

<template>
  <Text :is="is" class="label">
    <slot />
  </Text>
</template>
