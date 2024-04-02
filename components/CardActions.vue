<script setup lang="ts">
import Text from './Text.vue'

interface Props {
  is?: string
}
withDefaults(defineProps<Props>(), {
  is: 'div',
})
</script>

<template>
  <Text :is="is" class="card-actions">
    <slot />
  </Text>
</template>
