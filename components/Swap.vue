<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'

const props = defineProps<{
  modelValue?: boolean | null
  indeterminate?: boolean
  rotate?: boolean
  flip?: boolean
}>()
const emit = defineEmits(['update:modelValue'])
const classes = computed(() => {
  return {
    'swap-rotate': props.rotate,
    'swap-flip': props.flip,
  }
})

const checkbox = ref(null)

// Allow internal or external control
const isChecked = ref<any>(props.modelValue)
watch(isChecked, val => emit('update:modelValue', val))
watch(
  () => props.modelValue,
  (val) => {
    if (isChecked.value !== val)
      isChecked.value = val
  },
)

// When the indeterminate prop updates, manually update the checkbox element.
watch(
  () => [props.indeterminate, checkbox.value],
  ([val]) => {
    nextTick(() => {
      if (checkbox.value != null)
        (checkbox.value as any).indeterminate = val
      isChecked.value = null
    })
  },
  { immediate: true },
)
</script>

<template>
  <label class="swap" :class="classes">
    <input ref="checkbox" v-model="isChecked" type="checkbox">
    <div class="swap-off">
      <slot />
    </div>
    <div class="swap-on">
      <slot name="swap" />
    </div>
    <div v-if="indeterminate" class="swap-indeterminate">
      <slot name="indeterminate" />
    </div>
  </label>
</template>
