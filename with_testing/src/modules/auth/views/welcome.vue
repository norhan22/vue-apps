<template>
  <div>
    <h1 class="message">Welcome {{ authData.username }}</h1>
  </div>
</template>

<script>
export default {
  name: "authWelcome",

  data() {
    return {
      message: "Welcome to the Vue.js cookbook",
    };
  },

  computed: {},
};
</script>
