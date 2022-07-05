export default {
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
