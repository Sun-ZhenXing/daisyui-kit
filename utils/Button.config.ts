export * from './-utils'

/**
 * Converts a list of prop names to an object of Booleans. Can be spread into props.
 * @param propList list of prop names to become booleans
 */
export function toProps(propList: string[]): Record<string, boolean> {
  return propList.reduce((all: Record<string, any>, current: string) => {
    all[current.replace('-', '')] = Boolean
    return all
  }, {})
}

export const directionVariants = ['top', 'bottom', 'left', 'right']
export const colorVariants = ['neutral', 'primary', 'secondary', 'accent']
export const stateVariants = ['info', 'success', 'warning', 'error']
export const allColorVariants = [...colorVariants, ...stateVariants]
export const variants = [
  ...colorVariants,
  ...stateVariants,
  'ghost',
  'link',
  'glass',
]
export const sizes = ['xs', 'sm', 'md', 'lg']
export const shapes = ['circle', 'square']
