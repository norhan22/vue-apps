export default {
  computed: {
    authData() {
      return this.$store.getters.authData || {};
    },
    username() {
      this.$store.getters.username;
    },
  },
  methods: {
    goTo(routeName, params = null) {
      this.$router.push({ name: routeName, params });
    },
  },
};
