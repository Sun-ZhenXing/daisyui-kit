<script setup lang="ts">
import { makeMaskClasses, maskProps } from './Mask.config'

const props = defineProps({
  ...maskProps,
})
const classes = makeMaskClasses(props)
</script>

<template>
  <div class="mask" :class="[classes]">
    <slot />
  </div>
</template>
