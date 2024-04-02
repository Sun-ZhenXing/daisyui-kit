<script setup lang="ts">
withDefaults(defineProps<{
  is?: string
}>(), {
  is: 'div',
})
</script>

<template>
  <component :is="is" class="indicator">
    <slot />
  </component>
</template>
