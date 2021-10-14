import { createStore, createLogger } from "vuex";
import { mutations } from "./mutations";

const store = createStore({
  state: { loading: false, items: [] },
  mutations: mutations,
  actions: {},
  modules: {},
  plugins: [createLogger()],
});

export function useStore() {
  return store;
}

export default store;
