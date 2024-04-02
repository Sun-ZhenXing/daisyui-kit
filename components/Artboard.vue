<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  demo?: boolean
  horizontal?: boolean
  size?: string
  phone1?: boolean
  phone2?: boolean
  phone3?: boolean
  phone4?: boolean
  phone5?: boolean
  phone6?: boolean
}>()
const classes = computed(() => {
  return {
    'artboard-demo': props.demo,
    'horizontal': props.horizontal,
    'phone-1': props.phone1 || props.size === 'phone-1',
    'phone-2': props.phone2 || props.size === 'phone-2',
    'phone-3': props.phone3 || props.size === 'phone-3',
    'phone-4': props.phone4 || props.size === 'phone-4',
    'phone-5': props.phone5 || props.size === 'phone-5',
    'phone-6': props.phone6 || props.size === 'phone-6',
  }
})
</script>

<template>
  <div class="artboard" :class="classes">
    <slot />
  </div>
</template>
