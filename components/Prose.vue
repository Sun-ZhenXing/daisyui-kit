<template>
  <article class="prose daisy-prose max-w-none">
    <slot />
  </article>
</template>

<style lang="postcss">
.prose.full-width {
  width: 100%;
  max-width: 100%;
}
.prose.daisy-prose code:not(pre code) {
  @apply bg-base-300;
}
.prose .link-primary {
  @apply text-primary;
}
.prose .link-secondary {
  @apply text-secondary;
}
.prose .link-neutral {
  @apply text-neutral;
}
.prose .link-accent {
  @apply text-accent;
}

.prose h1 a, .prose h2 a, .prose h3 a, .prose h4 a, .prose h5 a, .prose h6 a {
  text-decoration: none;
  @apply font-bold
}
</style>
