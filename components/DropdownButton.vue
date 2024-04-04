<script setup>
import { inject } from 'vue'
import Button from './Button.vue'

const id = inject('dropdownId')
const isOpen = inject('isDropdownOpen')
const toggleDropdown = inject('toggleDropdown')
const buttonEl = inject('buttonEl')

const toggle = toggleDropdown
</script>

<template>
  <Button :id="id" ref="buttonEl" :aria-expanded="isOpen" aria-haspopup="menu" class="dropdown-button" @click="toggle">
    <slot />
  </Button>
</template>
