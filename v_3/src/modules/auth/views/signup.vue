<template>
  <form>
    <div class="mb-1">
      <label for="email"> Username </label>
      <input type="email" v-model="username" required />
      <div v-if="inValidName" class="error">
        Please enter a username with at least seven letters.
      </div>
    </div>
    <div class="mb-1">
      <label for="email"> Email </label>
      <input type="email" v-model="email" required />
      <span v-if="inValidEmail" class="error">Email is invalid</span>
    </div>
    <div class="mb-1">
      <label for="password"> password </label>
      <input type="password" v-model="password" required />
      <span v-if="inValidPass" class="error">Please enter a password</span>
    </div>
    <button type="submit" class="mr-1">Login</button>
    <button type="reset">Signup</button>
  </form>
</template>

<script>
export default {
  name: "authLogin",
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
      return this.username.trim().length < 7;
    },
    inValidPass() {
      return !this.password.length;
    },
  },
};
</script>

<style scoped></style>
