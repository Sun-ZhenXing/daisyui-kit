<script setup lang="ts">
import { onMounted, provide, reactive, ref } from 'vue'
import { autoUpdate, useFloating } from '@floating-ui/vue'
import { onClickOutside, syncRefs, useElementHover } from '@vueuse/core'
import { randomString } from '../utils/random-string'

const props = withDefaults(defineProps<{
  // allows passing a custom id to the dropdown. Required for SSR hydration.
  randomId?: string
  autoFocus?: boolean

  placement?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
  strategy?: 'fixed' | 'absolute'

  hover?: boolean
  delayEnter?: number
  delayLeave?: number
  closeOnClickOutside?: boolean
}>(), {
  autoFocus: false,
  placement: 'bottom-start',
  hover: false,
  delayEnter: 0,
  delayLeave: 300,
  closeOnClickOutside: true,
})
// Dropdown Visibility
const isOpen = defineModel('open', { local: true })
provide('isDropdownOpen', isOpen)

const autoFocus = ref(props.autoFocus)
provide('dropdownAutoFocus', autoFocus)

const randomValue = props.randomId || randomString(12)
const wrapperId = `dropdown-wrapper-${randomValue}`
const id = `dropdown-${randomValue}`
provide('dropdownId', id)

// set up the floating ui instance
const buttonEl = ref(null)
const contentEl = ref(null)
const floatingConfig = reactive({
  placement: ref(props.placement),
  strategy: ref(props.strategy),
  whileElementsMounted: autoUpdate,
})
const { floatingStyles } = useFloating(buttonEl, contentEl, floatingConfig)

provide('buttonEl', buttonEl)
provide('contentEl', contentEl)
provide('floatingStyles', floatingStyles)

// Visibility Utils
function toggle() {
  isOpen.value = !isOpen.value
}
function open() {
  isOpen.value = true
}
function close() {
  isOpen.value = false
}
provide('toggleDropdown', toggle)
provide('openDropdown', open)
provide('closeDropdown', close)

const dropdownWrapper = ref(null)

onMounted(() => {
  // Close when clicking outside the element
  // use a slight delay to avoid conflict with the focus trap in the DropdownContent.
  onClickOutside(contentEl, () => {
    if (props.closeOnClickOutside) {
      setTimeout(() => {
        isOpen.value = false
      }, 50)
    }
  })

  // Sync with top-level isHovered ref. For SSR compatibility.
  if (props.hover) {
    const hover = useElementHover(dropdownWrapper, {
      delayLeave: props.delayLeave,
      delayEnter: props.delayEnter,
    })
    syncRefs(hover, isOpen)
  }
})
</script>

<template>
  <div :id="wrapperId" ref="dropdownWrapper" class="relative inline-block floating-dropdown">
    <slot v-bind="{ toggle, open, close }" />
  </div>
</template>
