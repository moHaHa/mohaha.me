<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const message = ref('')
const msg = ref('')
const sending = ref(false)

function sendMessage() {
  const url = `https://api.telegram.org/bot6052156189:AAEdekXqQUEQqz-PAllHwh0vqJkzu7CKi14/sendMessage?chat_id=-975298243&text=${message.value}`
  sending.value = true
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        sending.value = false
        msg.value = 'error'
        throw new Error('Failed to send message')
      }
      sending.value = false
      message.value = ''
      msg.value = 'success, thank you for your message'
    })
    .catch((error) => {
      sending.value = false
      msg.value = 'error'
      console.error(error)
    })
}
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-chat inline-block />
    </div>
    <div>
      Hmmm
    </div>
    <p>
      <em text-sm opacity-75>send message</em>
    </p>
    <div py-lg>
      <div mb-lg>
        <TheInput v-model="message" @keyup.enter="sendMessage" />
      </div>

      <div>
        <button btn @click="sendMessage">
          Send
        </button>
      </div>
      <div v-if="sending" mt-lg>
        ... sending ...
      </div>
      <div v-else mt-lg>
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: prototype
</route>
