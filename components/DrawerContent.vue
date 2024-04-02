<script setup lang="ts">
import { createDrawerState } from '../utils/drawer-utils'

const props = withDefaults(defineProps<{
  name?: string
}>(), {
  name: 'drawer',
})

const drawerState = createDrawerState(props.name)
</script>

<template>
  <div class="drawer-content">
    <slot v-bind="drawerState" />
  </div>
</template>
