<script setup lang="ts">
import { computed } from 'vue'
import { makeMaskClasses, maskProps } from './Mask.config'
import Mask from './Mask.vue'

const props = defineProps({
  backgroundColor: { type: String, default: '#BBB' },
  maskClasses: String,
  showStatus: Boolean,
  online: Boolean,
  ...maskProps,
})

const classes = computed(() => {
  return {
    online: props.showStatus && props.online,
  }
})

const internalMaskClasses = makeMaskClasses(props)
const allMaskClasses = computed(() => {
  const classes = internalMaskClasses.value
  const hasMaskClass = Object.values(classes).find(v => v)
  // Enable rounded-btn class only if no mask classes are applied
  Object.assign(classes, { 'rounded-btn': !hasMaskClass })
  return classes
})

const color = computed(() => {
  return `#${contrastingColor(props.backgroundColor.replace('#', ''))}`
})

function contrastingColor(color: any) {
  return (luma(color) >= 155) ? '000' : 'fff'
}
// color can be a hx string or an array of RGB values 0-255
function luma(color: any) {
  const rgb = (typeof color === 'string') ? hexToRGBArray(color) : color
  return (0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2]) // SMPTE C, Rec. 709 weightings
}
function hexToRGBArray(color: any) {
  if (color.length === 3)
    color = color.charAt(0) + color.charAt(0) + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2)
  else if (color.length !== 6)
    throw new Error(`Invalid hex color: ${color}`)
  const rgb = []
  for (let i = 0; i <= 2; i++)
    rgb[i] = Number.parseInt(color.substr(i * 2, 2), 16)
  return rgb
}
</script>

<template>
  <div class="avatar" :class="classes">
    <Mask
      :style="{ backgroundColor, color }" class="w-full h-full avatar-mask aspect-square"
      :class="[allMaskClasses, maskClasses]"
    >
      <slot />
    </Mask>
  </div>
</template>

<style lang="postcss">
.avatar-mask>* {
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
