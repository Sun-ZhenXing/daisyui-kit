<script setup lang="ts">
withDefaults(defineProps<{
  is?: string | object | Component
  glass?: boolean
}>(), {
  is: 'div',
})
</script>

<template>
  <component :is="is" class="navbar" :class="{ glass }">
    <slot />
  </component>
</template>
