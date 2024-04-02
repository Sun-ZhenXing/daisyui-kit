<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: number | string
  count?: number | string
  half?: boolean

  disabled?: boolean

  color?: string
  neutral?: boolean
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean

  bg?: string

  shape?: string
  squircle?: boolean
  heart?: boolean
  hexagon?: boolean
  hexagon2?: boolean
  decagon?: boolean
  pentagon?: boolean
  diamond?: boolean
  square?: boolean
  circle?: boolean
  parallelogram?: boolean
  parallelogram2?: boolean
  parallelogram3?: boolean
  parallelogram4?: boolean
  star?: boolean
  star2?: boolean
  triangle?: boolean
  triangle2?: boolean
  triangle3?: boolean
  triangle4?: boolean

  size?: 'lg' | 'md' | 'sm' | 'xs'
  lg?: boolean
  md?: boolean
  sm?: boolean
  xs?: boolean
}>(), {
  count: 5,
})
const emit = defineEmits(['update:modelValue'])

const shapes = [
  'squircle',
  'heart',
  'hexagon',
  'hexagon2',
  'decagon',
  'pentagon',
  'diamond',
  'square',
  'circle',
  'parallelogram',
  'parallelogram2',
  'parallelogram3',
  'parallelogram4',
  'star',
  'star2',
  'triangle',
  'triangle2',
  'triangle3',
  'triangle4',
]

const ratingClasses = computed(() => {
  return {
    'rating-half': props.half,
    'rating-lg': props.lg || props.size === 'lg',
    'rating-md': props.md || props.size === 'md',
    'rating-sm': props.sm || props.size === 'sm',
    'rating-xs': props.xs || props.size === 'xs',
  }
})

const maskClasses = computed(() => {
  const hasShape = shapes.reduce((acc, current) => {
    return acc || props.shape || (props as any)[current]
  }, false)
  const { color, shape, disabled } = props
  return {
    'bg-neutral': props.neutral || color === 'neutral',
    'bg-primary': props.primary || color === 'primary',
    'bg-secondary': props.secondary || color === 'secondary',
    'bg-accent': props.accent || color === 'accent',
    'bg-info': props.info || color === 'info',
    'bg-success': props.success || color === 'success',
    'bg-warning': props.warning || color === 'warning',
    'bg-error': props.error || color === 'error',

    'cursor-not-allowed': disabled,
    'opacity-50': disabled,

    'mask-squircle': props.squircle || shape === 'squircle',
    'mask-heart': props.heart || shape === 'heart',
    'mask-hexagon': props.hexagon || shape === 'hexagon',
    'mask-hexagon-2': props.hexagon2 || shape === 'hexagon-2',
    'mask-decagon': props.decagon || shape === 'decagon',
    'mask-pentagon': props.pentagon || shape === 'pentagon',
    'mask-diamond': props.diamond || shape === 'diamond',
    'mask-square': props.square || shape === 'square',
    'mask-circle': props.circle || shape === 'circle',
    'mask-parallelogram': props.parallelogram || shape === 'parallelogram',
    'mask-parallelogram-2': props.parallelogram2 || shape === 'parallelogram-2',
    'mask-parallelogram-3': props.parallelogram3 || shape === 'parallelogram-3',
    'mask-parallelogram-4': props.parallelogram4 || shape === 'parallelogram-4',
    'mask-star': props.star || shape === 'star',
    'mask-star-2': props.star2 || shape === 'star-2' || !hasShape,
    'mask-triangle': props.triangle || shape === 'triangle',
    'mask-triangle-2': props.triangle2 || shape === 'triangle-2',
    'mask-triangle-3': props.triangle3 || shape === 'triangle-3',
    'mask-triangle-4': props.triangle4 || shape === 'triangle-4',
  }
})
const max = computed(() => Number.parseInt(props.count as string))

function handleValue(digit: number, half = false) {
  if (props.disabled)
    return

  if (props.half)
    return emit('update:modelValue', half ? digit - 0.5 : digit)

  return emit('update:modelValue', digit)
}
</script>

<template>
  <div class="rating" :class="ratingClasses">
    <input
      type="radio"
      :value="0"
      class="rating-hidden"
      :checked="modelValue === 0"
      @change="$emit('update:modelValue', 0)"
    >
    <template v-for="digit in max" :key="digit">
      <input
        type="radio"
        :value="half ? digit - 0.5 : digit"
        class="mask"
        :class="[maskClasses, bg, { 'mask-half-1': half }]"
        :checked="half ? modelValue === digit - 0.5 : modelValue === digit"
        @change="() => handleValue(digit, true)"
      >
      <input
        v-if="half"
        type="radio"
        :value="digit"
        class="mask mask-half-2"
        :class="[maskClasses, bg]"
        :checked="modelValue === digit"
        @change="() => handleValue(digit)"
      >
    </template>
  </div>
</template>
