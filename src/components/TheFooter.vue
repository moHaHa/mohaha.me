<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

import { useUserStore } from '~/stores/user'

const store = useUserStore()
function onAbout() {
  store.log('about')
}

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <nav flex="~ gap-4" mt-6 justify-center text-xl>
    <RouterLink icon-btn to="/" :title="t('button.home')">
      <div i-carbon-daimond />
    </RouterLink>
    <RouterLink icon-btn to="/about" :title="t('button.about')" @click="onAbout">
      <div i-carbon-dicom-overlay />
    </RouterLink>
    <RouterLink icon-btn to="/message" :title="t('button.about')">
      <div i-carbon-chat />
    </RouterLink>
    <a icon-btn rel="noreferrer" href="https://t.me/mohaha30" target="_blank" title="GitHub">
      <div i-carbon-send-alt-filled />
    </a>
    <a icon-btn rel="noreferrer" href="https://github.com/mohaha" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
    <button icon-btn :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>
    <a v-if="false" icon-btn :title="t('button.toggle_langs')" @click="toggleLocales()">
      <div i-carbon-language />
    </a>
    <div fixed bottom-10px right-10px text-sm op-50>
      © Mohammad Al Hallaq
    </div>
  </nav>
</template>
