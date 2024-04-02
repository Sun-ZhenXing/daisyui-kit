<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import { onClickOutside, syncRefs, useElementHover } from '@vueuse/core'
import { randomString } from '../utils/random-string'

const props = withDefaults(defineProps<{
  hover?: boolean
  delayEnter?: number
  delayLeave?: number
  closeOnClickOutside?: boolean
}>(), {
  position: 'bottom',
  end: false,
  hover: false,
  delayEnter: 0,
  delayLeave: 300,
  closeOnClickOutside: false,
})
// "Expand" Visibility
const isOpen = defineModel('open', { local: true, default: false, type: Boolean })
provide('isExpandOpen', isOpen)

// ids for accessibility
const randomValue = randomString(12)
const wrapperId = `expand-wrapper-${randomValue}`
const id = `expand-${randomValue}`
provide('expandId', id)

// Visibility Utils
function toggle() {
  setTimeout(() => {
    isOpen.value = !isOpen.value
  }, 50)
}
function open() {
  isOpen.value = true
}
function close() {
  isOpen.value = false
}
provide('toggleExpand', toggle)
provide('openExpand', open)
provide('closeExpand', close)

const expandEl = ref()

onMounted(() => {
  // Close when clicking outside the element
  onClickOutside(expandEl, () => {
    if (props.closeOnClickOutside) {
      setTimeout(() => {
        isOpen.value = false
      }, 500)
    }
  })

  if (props.hover) {
    // Sync with top-level isHovered ref. For SSR compatibility.
    const hover = useElementHover(expandEl, {
      delayLeave: props.delayLeave,
      delayEnter: props.delayEnter,
    })
    syncRefs(hover, isOpen)
  }
})

function handleClick(ev: MouseEvent) {
  ev.preventDefault()
  if (ev.target === expandEl.value.children[0])
    isOpen.value = !isOpen.value
}
</script>

<template>
  <details :id="wrapperId" ref="expandEl" class="dropdown menu-expand" :open="isOpen" @click="handleClick">
    <slot v-bind="{ toggle, open, close }" />
  </details>
</template>
