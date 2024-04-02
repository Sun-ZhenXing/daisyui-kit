<script setup lang="ts">
defineProps<{
  active?: boolean
  disabled?: boolean
}>()
</script>

<template>
  <li class="menu-item" :class="{ active, disabled }">
    <slot />
  </li>
</template>

<style lang="postcss">
/*
  Allow adding .active class to the MenuItem element.
  DaisyUI only supports adding it to the `a` element.
*/
.menu-item.active > a, .menu-item.active > span {
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  color: hsl(var(--nc) / var(--tw-text-opacity));
}
.menu-item.disabled > a, .menu-item.disabled > span {
  background-color: var(--n)
}

/* Fix padding when putting a Dropdown inside of a menu */
.menu-item > .floating-dropdown {
  padding: 0;
}
.menu-item > .floating-dropdown > .dropdown-button,
.menu-item > .floating-dropdown > .dropdown-target {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem
}
</style>
