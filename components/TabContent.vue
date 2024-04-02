<script setup lang="ts">
import { computed, inject } from 'vue'

const props = withDefaults(defineProps<{
  is?: any
  name: string
}>(), {
  is: 'div',
})

const tabManager: any = inject('tabManager')

const isCurrentTab = computed(() => {
  return tabManager.currentTab === props.name
})

if (!tabManager.currentTab)
  tabManager.currentTab = props.name

const existing = tabManager.tabs.find(t => t === props.name)
if (!existing)
  tabManager.tabs.push(props.name)
</script>

<template>
  <component :is="is" v-show="isCurrentTab" class="tab-content">
    <slot />
  </component>
</template>
