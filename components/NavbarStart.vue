<script setup lang="ts">
withDefaults(defineProps<{
  is?: string | object | Component
}>(), {
  is: 'div',
})
</script>

<template>
  <component :is="is" class="navbar-start">
    <slot />
  </component>
</template>
