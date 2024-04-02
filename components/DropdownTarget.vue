<script setup>
import { inject } from 'vue'

const id = inject('dropdownId')
const isOpen = inject('isDropdownOpen')
const toggle = inject('toggleDropdown')
const buttonEl = inject('buttonEl')
</script>

<template>
  <div :id="id" ref="buttonEl" :aria-expanded="isOpen" aria-haspopup="menu" class="dropdown-target" @click="toggle">
    <slot />
  </div>
</template>
