<template>
  <form @submit.prevent="submit" method="get">
    <div class="mb-1">
      <label for="username"> Username </label>
      <input
        v-model="username"
        name="username"
        required
        :class="{ error: inValidName }"
      />
      <span v-if="inValidName" class="error">
        Please enter a username with at least seven letters.
      </span>
    </div>
    <div class="mb-1">
      <label for="email"> Email </label>
      <input
        type="email"
        v-model="email"
        required
        name="email"
        :class="{ error: inValidEmail }"
      />
      <span v-if="inValidEmail" class="error">Email is invalid</span>
    </div>
    <!--    <div class="mb-1">-->
    <!--      <label for="password"> password </label>-->
    <!--      <input type="password" v-model="password" required />-->
    <!--      <span v-if="inValidPass" class="error">Please enter a password</span>-->
    <!--    </div>-->
    <div>
      <button type="submit" class="mr-1">Save</button>
      <!--      <button @click="goTo('login')">Login</button>-->
    </div>
  </form>
</template>

<script>
export default {
  name: "authSignup",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  computed: {
    inValidEmail() {
      return this.email.length && !this.email.includes("@");
    },
    inValidName() {
      return this.username.length && this.username.trim().length < 7;
    },
    inValidPass() {
      return !this.password.length;
    },
    authData() {
      return { username: this.username, email: this.email };
    },
  },
  methods: {
    submit() {
      this.setData();
      this.goTo("welcome");
    },
    setData(data = this.authData) {
      this.$store.commit("setAuthData", data);
    },
  },
  created() {
    this.setData({});
  },
};
</script>

<style scoped></style>
