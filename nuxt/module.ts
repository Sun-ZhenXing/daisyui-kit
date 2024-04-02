import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'daisyui-kit',
    configKey: 'daisyui',
  },
  defaults: {
    prefix: '',
  },
  setup(moduleOptions, nuxt) {
    const { prefix } = moduleOptions

    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: fileURLToPath(new URL('./components', import.meta.url)),
        prefix,
      })
    })
  },
})
