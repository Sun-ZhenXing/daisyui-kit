<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  is?: string | object | Component
}>()

const tag = computed(() => props.is || 'span')
</script>

<template>
  <component :is="tag" class="countdown">
    <slot />
  </component>
</template>
