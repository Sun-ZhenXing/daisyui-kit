<script setup lang="ts">
import { computed, inject } from 'vue'

const props = defineProps<{
  modelValue?: any
  value: any
  disabled?: boolean

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

const radioGroup: any = inject('radio-group', null)

const _props = computed(() => {
  if (radioGroup)
    return Object.assign({}, radioGroup.props, props)
  else return props
})

const classes = computed(() => {
  const { color, neutral, primary, secondary, accent, success, warning, info, error, size, xs, sm, md, lg } = _props.value
  return {
    'radio-neutral': neutral || color === 'neutral',
    'radio-primary': primary || color === 'primary',
    'radio-secondary': secondary || color === 'secondary',
    'radio-accent': accent || color === 'accent',
    'radio-success': success || color === 'success',
    'radio-warning': warning || color === 'warning',
    'radio-info': info || color === 'info',
    'radio-error': error || color === 'error',
    'radio-xs': xs || size === 'xs',
    'radio-sm': sm || size === 'sm',
    'radio-md': md || size === 'md',
    'radio-lg': lg || size === 'lg',
  }
})

const currentValue = computed({
  get() {
    if (radioGroup)
      return radioGroup.currentValue
    return props.modelValue
  },
  set(val: string) {
    if (radioGroup)
      radioGroup.currentValue = val
    emit('update:modelValue', val)
  },
})
</script>

<template>
  <input
    v-model="currentValue" type="radio" v-bind="{ ..._props, ...$attrs }" class="radio" :class="classes"
    :disabled="disabled" :value="props.value"
  >
</template>
