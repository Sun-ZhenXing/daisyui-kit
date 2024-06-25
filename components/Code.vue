<!-- eslint-disable vue/no-reserved-component-names -->
<script>
import { computed, onBeforeUpdate, onMounted, ref } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import { useClipboard } from '@vueuse/core'

export default {
  name: 'Code',
  props: {
    language: {
      type: String,
      default: 'javascript',
    },
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp()

    const source = ref(null)
    const lang = computed(() => {
      if (props.language === 'vue')
        return 'html'
      else return props.language
    })
    const languageClass = computed(() => `language-${lang.value}`)
    const { text, copy, copied, isSupported } = useClipboard({ source })

    onMounted(() => {
      if (!nuxtApp.ssrContext) {
        setTimeout(() => {
          Prism.highlightAllUnder(source.value)
        }, 0)
      }
    })
    onBeforeUpdate(() => {
      if (typeof context.slots.default[0] === 'string') {
        const newText = context.slots.default[0].replace(
          /^\s*|\s*$/g,
          '',
        )
        context.el.querySelector('code').textContent = newText
        Prism.highlightAllUnder(source.value)
      }
    })

    const doCopy = () => {
      copy(source.value.textContent)
    }

    return { source, languageClass, text, copy, copied, isSupported, doCopy }
  },
}
</script>

<template>
  <div class="relative mockup-code">
    <div class="absolute flex flex-row items-center top-1 right-1">
      <div v-if="copied" class="pr-2 text-sm">
        copied
      </div>
      <Button sm @click="doCopy">
        copy
      </Button>
    </div>
    <ClientOnly>
      <pre
        ref="source"
        class="whitespace-pre-wrap daisy-code-highlight"
        :class="languageClass"
      ><code><slot /></code></pre>

      <template #fallback>
        <pre
          class="whitespace-pre-wrap daisy-code-highlight"
        ><code><slot /></code></pre>
      </template>
    </ClientOnly>
  </div>
</template>

<style>
.mockup-code .daisy-code-highlight {
  margin-left: 0 !important;
  background: none;
  border: none;
  box-shadow: none;
  padding-top: 0;
  padding-bottom: 0;
}
.mockup-code pre.daisy-code-highlight:before {
  margin: 0 !important;
}
</style>
