<script setup>
import { inject } from 'vue'

const id = inject('expandId')
const isOpen = inject('isExpandOpen')
const toggle = inject('toggleExpand')
</script>

<template>
  <summary :id="id" :aria-expanded="isOpen" aria-haspopup="menu" class="menu-expand-toggle" @click.prevent.stop="toggle">
    <slot />
  </summary>
</template>
