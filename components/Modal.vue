<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  modelValue?: boolean
  closeOnClickOutside?: boolean
  top?: boolean
  bottom?: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const is = 'div'

// defineModel 'open'
const _isOpen = ref(props.modelValue)
watch(() => props.modelValue, (val) => {
  _isOpen.value = val
})
const isOpen = computed({
  get: () => _isOpen.value,
  set: (val) => {
    _isOpen.value = val
    if (props.modelValue !== val)
      emit('update:modelValue', val)
  },
})

function handleClick() {
  if (props.closeOnClickOutside)
    isOpen.value = false
}
</script>

<template>
  <input v-model="isOpen" type="checkbox" class="modal-toggle">
  <component
    :is="is"
    v-bind="{ ...$attrs, ...$props }"
    class="modal"
    :class="{
      'modal-top': props.top,
      'modal-bottom': props.bottom,
    }"
    @click.self="handleClick"
  >
    <slot />
  </component>
</template>
