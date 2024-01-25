import { defineStore } from 'pinia'
import { UserState } from '@/store/interface'
import piniaPersistConfig from '@/store/helper/persist'

export const useUserStore = defineStore({
  id: 'vepa-user',
  state: (): UserState => ({
    token: '',
    userInfo: { name: 'Jason Chen' }
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState['userInfo']) {
      this.userInfo = userInfo
    }
  },
  persist: piniaPersistConfig('vepa-user')
})
