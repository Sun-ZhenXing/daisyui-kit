import { computed } from 'vue'

export const maskProps = {
  shape: { type: String },
  squircle: Boolean,
  heart: Boolean,
  hexagon: Boolean,
  hexagon2: Boolean,
  decagon: Boolean,
  pentagon: Boolean,
  diamond: Boolean,
  square: Boolean,
  circle: Boolean,
  parallelogram: Boolean,
  parallelogram2: Boolean,
  parallelogram3: Boolean,
  parallelogram4: Boolean,
  star: Boolean,
  star2: Boolean,
  triangle: Boolean,
  triangle2: Boolean,
  triangle3: Boolean,
  triangle4: Boolean,
}

export function makeMaskClasses(props: any) {
  const classes = computed(() => {
    return {
      'mask-squircle': props.squircle || props.shape === 'squircle',
      'mask-heart': props.heart || props.shape === 'heart',
      'mask-hexagon': props.hexagon || props.shape === 'hexagon',
      'mask-hexagon-2': props.hexagon2 || props.shape === 'hexagon-2',
      'mask-decagon': props.decagon || props.shape === 'decagon',
      'mask-pentagon': props.pentagon || props.shape === 'pentagon',
      'mask-diamond': props.diamond || props.shape === 'diamond',
      'mask-square': props.square || props.shape === 'square',
      'mask-circle': props.circle || props.shape === 'circle',
      'mask-parallelogram':
        props.parallelogram || props.shape === 'parallelogram',
      'mask-parallelogram-2':
        props.parallelogram2 || props.shape === 'parallelogram-2',
      'mask-parallelogram-3':
        props.parallelogram3 || props.shape === 'parallelogram-3',
      'mask-parallelogram-4':
        props.parallelogram4 || props.shape === 'parallelogram-4',
      'mask-star': props.star || props.shape === 'star',
      'mask-star-2': props.star2 || props.shape === 'star-2',
      'mask-triangle': props.triangle || props.shape === 'triangle',
      'mask-triangle-2': props.triangle2 || props.shape === 'triangle-2',
      'mask-triangle-3': props.triangle3 || props.shape === 'triangle-3',
      'mask-triangle-4': props.triangle4 || props.shape === 'triangle-4',
    }
  })
  return classes
}

export const shapes = [
  'squircle',
  'heart',
  'hexagon',
  'hexagon-2',
  'decagon',
  'pentagon',
  'diamond',
  'square',
  'circle',
  'parallelogram',
  'parallelogram-2',
  'parallelogram-3',
  'parallelogram-4',
  'star',
  'star-2',
  'triangle',
  'triangle-2',
  'triangle-3',
  'triangle-4',
]
