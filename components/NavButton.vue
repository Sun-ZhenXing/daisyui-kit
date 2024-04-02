<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  active?: boolean
  disabled?: boolean
}>()
const classes = computed(() => {
  return {
    active: props.active,
    disabled: props.disabled,
  }
})
</script>

<template>
  <button class="nav-button" :class="classes">
    <slot />
  </button>
</template>
