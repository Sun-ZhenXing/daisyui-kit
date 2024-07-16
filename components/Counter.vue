<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value: number
  is?: string | Component
}>()

const tag = computed(() => props.is || 'span')
</script>

<template>
  <component :is="tag" v-bind="$attrs" :style="`--value:${value};`" />
</template>
