<script setup lang="ts">
import { provide, reactive, watch } from 'vue'

const props = defineProps<{
  tab?: string
}>()
const emit = defineEmits(['update:tab'])

const manager = reactive({
  currentTab: props.tab,
  tabs: [],
})
provide('tabManager', manager)

// If the tab changes from outside, update the internal value.
watch(
  () => props.tab,
  (val) => {
    if (val !== manager.currentTab)
      manager.currentTab = val
  },
)

// If the internal tab value changes, update the tab
watch(
  () => manager.currentTab,
  (val) => {
    if (val !== props.tab)
      emit('update:tab', val)
  },
)
</script>

<template>
  <div class="tabs-manager">
    <slot />
  </div>
</template>
