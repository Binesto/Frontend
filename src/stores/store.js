import { defineStore } from 'pinia'

export const useStateStore = defineStore({
  state: () => ({
    search: false
  }),
  getters: {
    search: (state) => state.search = !state.search
  },
  actions: {
    // increment() {
    //   this.counter++
    // }
  }
})
