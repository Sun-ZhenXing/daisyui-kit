<script setup lang="ts">
import { computed, provide, reactive } from 'vue'

const props = defineProps<{
  modelValue?: any
  name: string

  color?: string
  neutral?: boolean
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  success?: boolean
  warning?: boolean
  info?: boolean
  error?: boolean

  size?: string
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const currentValue = computed({
  get: () => {
    return props.modelValue
  },
  set: (val) => {
    emit('update:modelValue', val)
  },
})

const state = reactive({
  currentValue,
  props,
})
provide('radio-group', state)
</script>

<template>
  <div class="radio-group">
    <slot />
  </div>
</template>
