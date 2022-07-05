<template>
  <form>
    <div class="mb-1">
      <label for="email"> Email </label>
      <input
        type="email"
        v-model="email"
        required
        :class="{ error: notValidEmail }"
      />
    </div>
    <div class="mb-1">
      <label for="password"> password </label>
      <input
        type="password"
        v-model="password"
        required
        :class="{ error: !password }"
      />
    </div>
    <button type="submit" class="mr-1">Login</button>
    <button type="reset">Signup</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => {
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

<style scoped>
button {
  text-transform: capitalize;
}

input {
  border-color: #ccc;
}

.error {
  border-color: red;
}
</style>
