import { computed } from 'vue'

interface MakeExclusiveClassOptions {
  props: Record<string, any>
  prefix: string
  prop: string
  propList: string[]
  defaultVal?: string
}
/**
 * Creates a className for the provided `prop` name  and checks that multiple are not enabled.
 */
export function makeExclusiveClass({
  props,
  prefix,
  prop,
  propList,
  defaultVal = '',
}: MakeExclusiveClassOptions) {
  return computed(() => {
    const active = propList.filter((v: string) => props[v.replace('-', '')])
    if (active.length > 1) {
      throw new Error(
        `only one ${prop} can be enabled at a time. Current are ${active}`,
      )
    }
    const current = active[0] || ''
    const _prefix = current.startsWith('-') ? '' : prefix
    return current ? `${_prefix}${current.replace('-', '') || defaultVal}` : ''
  })
}

export function makeIndividualClass({ props, prefix, prop }: MakeExclusiveClassOptions) {
  return computed(() => {
    return props[prop] ? `${prefix}${prop}` : ''
  })
}
