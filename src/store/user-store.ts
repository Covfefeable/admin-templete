import { defineStore } from "pinia";
import type { UserInfo } from "../api/user-api";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as UserInfo | null,
  }),
  actions: {
    setUser(user: UserInfo | null) {
      this.user = user;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});
