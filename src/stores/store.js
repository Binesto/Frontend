import { defineStore } from 'pinia'

export const useStateStore = defineStore({
  id:'state',
  state: () => ({
    search: true
  }),
  getters: {
    getSearch: (state) => state.search
  },
  actions: {
    setSearch(){
      this.search = !this.search
    }
  }
})