<template>
  <form>
    <div class="mb-1">
      <label for="email"> Email </label>
      <input type="email" v-model="email" required />
      <span v-if="notValidEmail" class="error">Email isn't valid</span>
    </div>
    <div class="mb-1">
      <label for="password"> password </label>
      <input type="password" v-model="password" required />
      <span v-if="!password" class="error">Password isn't valid</span>
    </div>
    <button type="submit" class="mr-1">Login</button>
    <button type="reset" @click="goTo('signup')">Signup</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    notValidEmail() {
      return this.email.length && !this.email.includes("@");
    },
  },
};
</script>
