<script setup lang="ts">
import { computed, inject, ref } from 'vue'

const props = defineProps<{
  style?: 'arrow' | 'plus'
  arrow?: boolean
  plus?: boolean

  open?: boolean
  close?: boolean

  toggle?: boolean

  // for accordion
  value?: any
}>()

const accordionValue: any = inject('accordion-value', ref('no-accordion-value'))
const useAccordion = computed(() => {
  return accordionValue.value !== 'no-accordion-value'
})
const isAccordionSelected = computed(
  () => {
    if (!useAccordion.value)
      return false
    return accordionValue.value === props.value
  },
)

function handleClick() {
  if (useAccordion.value)
    accordionValue.value = props.value
}

const classes = computed(() => {
  const { style, arrow, plus, open, close } = props
  return {
    'collapse-arrow': arrow || style === 'arrow',
    'collapse-plus': plus || style === 'plus',
    'collapse-open': (open && !close) || isAccordionSelected.value,
    'collapse-close': close,
  }
})
</script>

<template>
  <div tabindex="0" class="collapse" :class="classes" @click="handleClick">
    <input
      v-if="toggle || useAccordion"
      :type="useAccordion ? 'radio' : 'checkbox'"
      :checked="isAccordionSelected"
    >
    <slot />
  </div>
</template>
