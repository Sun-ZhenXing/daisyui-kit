<script setup>
import { inject, nextTick, ref, watchEffect } from 'vue'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

const autoFocus = inject('dropdownAutoFocus')
const id = inject('dropdownId')
const isOpen = inject('isDropdownOpen')
const isOpenDelayed = ref(isOpen.value)
const contentEl = inject('contentEl')
const floatingStyles = inject('floatingStyles')

// Dropdown Utils
const toggle = inject('toggleDropdown')
const open = inject('openDropdown')
const close = inject('closeDropdown')

let activate
let deactivate

if (autoFocus.value) {
  const { activate: _activate, deactivate: _deactivate, hasFocus } = useFocusTrap(contentEl, { immediate: true })
  activate = _activate
  deactivate = _deactivate

  // hide the dropdown when the focus-trap drops focus (by pressing escape, for example)
  watchEffect(() => {
    if (!hasFocus.value)
      close()
  })
}
// const { activate, deactivate, hasFocus } = useFocusTrap(contentEl, { immediate: true })

// synchronize isOpenDelayed with isOpen
watchEffect(async () => {
  if (isOpen.value) {
    isOpenDelayed.value = true
    if (autoFocus.value) {
      await nextTick()
      activate()
    }
  }
  else {
    if (autoFocus.value) {
      deactivate()
      await nextTick()
    }
    isOpenDelayed.value = false
  }
})
</script>

<template>
  <div v-if="isOpen" ref="contentEl" :style="floatingStyles" :aria-labelledby="id" role="menu">
    <slot v-bind="{ toggle, open, close }" />
  </div>
</template>
