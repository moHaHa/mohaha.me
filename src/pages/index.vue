<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const store = useUserStore()
onMounted(() => {
  store.log('home')
})

defineOptions({
  name: 'IndexPage',
})
// const m = 'hi'
// Send message to Telegram bot
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <div>
      Mohammad Al Hallaq
    </div>
    <p>
      <em text-sm opacity-75>@moHaHa</em>
    </p>
  </div>
</template>

<route lang="yaml">
meta:
  layout: prototype
</route>
