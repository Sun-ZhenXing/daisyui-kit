<script setup lang="ts">
import { computed } from 'vue'

type Color = | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'

const props = withDefaults(defineProps<{
  modelValue: any
  options: Record<string, any>[] | any[]
  value?: (val: any) => any
  label?: (val: any) => any
  resultAsObject?: boolean
  join?: boolean

  bordered?: boolean
  ghost?: boolean
  disabled?: boolean

  color?: Color
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean

  size?: 'lg' | 'md' | 'sm' | 'xs'
  lg?: boolean
  md?: boolean
  sm?: boolean
  xs?: boolean
}>(), {
  value: (val: any) => {
    if (!val)
      return null

    return typeof val === 'string'
      ? (val as string)
      : (val?.value || val?.id || val?._id || val)
  },
  label: (val: any) =>
    typeof val === 'string'
      ? (val as string)
      : (val.label || val.name || val.title),
  resultAsObject: false,
})
const emit = defineEmits(['update:modelValue'])

const computedVModel = computed({
  get: () => {
    if (props.resultAsObject && props.modelValue != null)
      return props.value(props.modelValue)

    return props.modelValue
  },
  set: (val) => {
    if (val === undefined)
      val = null
    if (props.resultAsObject && val != null)
      val = props.options.find(o => props.value(o) === val)

    emit('update:modelValue', val)
  },
})

const classes = computed(() => {
  return {
    'join-item': props.join,

    'select-primary': props.primary || props.color === 'primary',
    'select-secondary': props.secondary || props.color === 'secondary',
    'select-accent': props.accent || props.color === 'accent',
    'select-info': props.info || props.color === 'info',
    'select-success': props.success || props.color === 'success',
    'select-warning': props.warning || props.color === 'warning',
    'select-error': props.error || props.color === 'error',

    'select-lg': props.lg || props.size === 'lg',
    'select-md': props.md || props.size === 'md',
    'select-sm': props.sm || props.size === 'sm',
    'select-xs': props.xs || props.size === 'xs',

    'select-bordered': props.bordered,
    'select-ghost': props.ghost,
  }
})
</script>

<template>
  <select v-model="computedVModel" class="select" :class="classes" :disabled="disabled">
    <option
      v-for="option in options"
      :key="value(option)"
      :value="value(option)"
      :disabled="option.disabled"
    >
      {{ label(option) }}
    </option>
  </select>
</template>
