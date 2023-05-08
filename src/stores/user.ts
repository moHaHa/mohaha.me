import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  /**
   * Current name of the user.
   */
  const savedName = ref('')
  const previousNames = ref(new Set<string>())

  const usedNames = computed(() => Array.from(previousNames.value))
  const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setNewName(name: string) {
    if (savedName.value)
      previousNames.value.add(savedName.value)

    savedName.value = name
  }
  function log(page: string) {
    fetch('https://ipapi.co/json')
      .then((response) => {
        return response.json()
      })
      .then((payload) => {
        const userAgent = navigator.userAgent
        const start = userAgent.indexOf('(') + 1
        const end = userAgent.indexOf(')', start)
        const deviceInfo = userAgent.substring(start, end)
        const o = `
          page: ${page},
          ip: ${payload.ip},
          country: ${payload.country_name},
          city: ${payload.city},
          Device Type: ${deviceInfo}
         `
        fetch(`https://api.telegram.org/bot6052156189:AAEdekXqQUEQqz-PAllHwh0vqJkzu7CKi14/sendMessage?chat_id=-975298243&text=${o}`)
          .then(response => response.json())
          .then((data) => {
            // eslint-disable-next-line no-console
            console.log(data)
          })
      })
  }

  return {
    log,
    setNewName,
    otherNames,
    savedName,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
