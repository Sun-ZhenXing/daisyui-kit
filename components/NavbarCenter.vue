<script setup lang="ts">
withDefaults(defineProps<{
  is?: string | object | Function
}>(), {
  is: 'div',
})
</script>

<template>
  <component :is="is" class="navbar-center">
    <slot />
  </component>
</template>
