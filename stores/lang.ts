// https://stephanlangeveld.medium.com/simple-local-storage-implementation-using-vue-3-vueuse-and-pinia-with-zero-extra-lines-of-code-cb9ed2cce42a
import { defineStore } from "pinia";

export const useLangStore = defineStore({
  id: "lang",
  state: () => ({
    lang: "he" as string,
    // dir: "ltr" as string,
  }),
  getters: {
  },
  actions: {
    change(value: string) {
      this.lang = value
    },

  },
  persist: {
    storage: persistedState.localStorage,
    paths: [
      'lang',
      // 'dir'
    ],

  },
});
