<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'

const props = defineProps<{
  modelValue?: string | number
}>()
const emit = defineEmits(['update:modelValue'])

const _value = ref(props.modelValue)
watch(() => props.modelValue, (val) => {
  _value.value = val
})
const value = computed({
  get: () => _value.value,
  set: (val) => {
    _value.value = val
    if (props.modelValue !== val)
      emit('update:modelValue', val)
  },
})

provide('accordion-value', value)
</script>

<template>
  <div class="daisy-ui-kit-accordion">
    <slot />
  </div>
</template>
