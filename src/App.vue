<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Mohammad Al Hallaq',
  meta: [
    { name: 'description', content: '@mohaha, with a passion for creating beautiful and intuitive user experiences.' },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
    { name: 'author', content: 'Mohammad Al Hallaq' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@mohaha300' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
