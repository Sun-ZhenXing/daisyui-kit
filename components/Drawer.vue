<script setup lang="ts">
import { computed, watch } from 'vue'
import { createDrawerState } from '../utils/drawer-utils'

const props = withDefaults(defineProps<{
  open?: boolean
  name?: string
  end?: boolean
}>(), {
  name: 'drawer',
})
const emit = defineEmits(['update:open'])

// sync `open` prop with drawerState.isDrawerOpen
const drawerState = createDrawerState(props.name)
watch(
  () => props.open,
  (value) => {
    if (drawerState.isDrawerOpen !== value)
      drawerState.isDrawerOpen = value
  },
  { immediate: true },
)
watch(
  () => drawerState.isDrawerOpen,
  (value) => {
    if (props.open !== value)
      emit('update:open', value)
  },
  { immediate: true },
)

const classes = computed(() => {
  return {
    'drawer-end': props.end,
  }
})
</script>

<template>
  <div class="drawer" :class="classes">
    <input :id="name" v-model="drawerState.isDrawerOpen" type="checkbox" class="drawer-toggle">
    <slot v-bind="drawerState" />
  </div>
</template>
