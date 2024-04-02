<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import { computed, watch } from 'vue'

const props = withDefaults(defineProps<{
  durationInSeconds?: number
  untilDate?: Date
}>(), { durationInSeconds: 0 })
const emit = defineEmits(['done'])

const calculateDate = () => props.untilDate || new Date(Date.now() + props.durationInSeconds * 1000)
const targetDate = ref<Date>(calculateDate())
watch(
  () => props.durationInSeconds,
  () => {
    targetDate.value = calculateDate()
  },
  { immediate: true },
)

// The target date
function calcTimeLeft() {
  const remaining = targetDate.value.getTime() - Date.now()
  return remaining < 0 ? 0 : remaining
}
const timeLeft = ref(calcTimeLeft())
useIntervalFn(() => {
  timeLeft.value = calcTimeLeft()
}, 1000)

watch(timeLeft, () => {
  if (timeLeft.value === 0)
    emit('done')
})

const totalSeconds = computed(() => Math.round(timeLeft.value / 1000))
const totalMinutes = computed(() => Math.floor(timeLeft.value / 1000 / 60))
const totalHours = computed(() => Math.floor(timeLeft.value / 1000 / 60 / 60))
const totalDays = computed(() => Math.floor(timeLeft.value / 1000 / 60 / 60 / 24))
const totalWeeks = computed(() => Math.floor(timeLeft.value / 1000 / 60 / 60 / 24 / 7))
const totalMonths = computed(() => {
  const today = new Date()
  let diffMonths = (targetDate.value.getFullYear() - today.getFullYear()) * 12
  diffMonths -= targetDate.value.getMonth()
  diffMonths += today.getMonth()
  return diffMonths
})
const split = computed(() => {
  const days = totalDays.value
  const hours = totalHours.value - days * 24
  const minutes = totalMinutes.value - hours * 60
  const seconds = totalSeconds.value - totalMinutes.value * 60
  return { days, hours, minutes, seconds }
})
</script>

<template>
  <slot
    v-bind="{
      totalSeconds,
      totalMinutes,
      totalHours,
      totalDays,
      totalWeeks,
      totalMonths,
      targetDate,
      split,
    }"
  />
</template>
