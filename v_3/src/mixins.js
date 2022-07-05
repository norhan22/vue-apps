import Vue from "vue";

Vue.mixin({
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
    },
  },
});
