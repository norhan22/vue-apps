export default {
  state: {
    username: "",
    email: "",
    authData: {},
  },
  getters: {
    username: (state) => state.username,
    email: (state) => state.email,
    authData: (state) => ({ username: state.username, email: state.email }),
  },
  mutations: {
    setAuthData(state, data) {
      state.username = data.username;
      state.email = data.email;
    },
  },
  actions: {},
};
