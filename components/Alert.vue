<script setup lang="ts">
import { computed } from 'vue'

const props: any = defineProps<{
  type?: string
  info?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
}>()
const classes = computed(() => {
  return {
    'alert-info': props.info || props.type === 'info',
    'alert-success': props.success || props.type === 'success',
    'alert-warning': props.warning || props.type === 'warning',
    'alert-error': props.error || props.type === 'error',
  }
})
</script>

<template>
  <div class="alert" :class="classes">
    <slot />
  </div>
</template>
