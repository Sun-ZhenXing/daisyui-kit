<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  vertical: Boolean,
})
const classes = computed(() => {
  return {
    'flex-col': props.vertical,
    'flex-row': !props.vertical,
  }
})
</script>

<template>
  <div class="avatar-group" :class="classes">
    <slot />
  </div>
</template>
