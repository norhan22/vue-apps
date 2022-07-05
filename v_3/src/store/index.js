import { createStore } from "vuex";
import authStore from "@/modules/auth/auth.store";

export default createStore({
  modules: {
    authStore,
  },
});
