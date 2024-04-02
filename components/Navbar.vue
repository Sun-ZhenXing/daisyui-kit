<script setup lang="ts">
withDefaults(defineProps<{
  is?: string | object | Function
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
