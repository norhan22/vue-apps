<template>
  <form @submit.prevent="startSave" method="get">
    <div class="mb-1">
      <label for="username"> Username </label>
      <input
        v-model.trim="username"
        name="username"
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
        name="email"
        :class="{ error: inValidEmail }"
      />
      <span v-if="inValidEmail" class="error">Email is invalid</span>
    </div>
    <div class="mb-1">
      <label for="password"> password </label>
      <input type="password" v-model="password" name="password" />
      <span v-if="inValidPass" class="error">Please enter a password</span>
    </div>
    <div class="mb-1">
      <label for="confirmPassword"> confirm password </label>
      <input type="password" v-model="confirmPassword" name="confirmPassword" />
      <span v-if="inValidPass" class="error">the password not matched</span>
    </div>
    <div>
      <button @click="startSave" class="mr-1">Save</button>
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
      confirmPassword: "",
      startSubmit: false,
    };
  },
  computed: {
    inValidEmail() {
      return (
        this.startSubmit &&
        (!this.email.length ||
          !this.email.includes("@") ||
          !this.email.includes("."))
      );
    },
    inValidName() {
      return (
        this.startSubmit &&
        (!this.username.length || this.username.trim().length < 7)
      );
    },
    inValidPass() {
      return (
        (this.startSubmit &&
          (!this.password.length || !this.confirmPassword.length)) ||
        this.confirmPassword !== this.password
      );
    },
    isValid() {
      return !this.inValidName && !this.inValidEmail && !this.inValidPass;
    },
    authData() {
      return { username: this.username, email: this.email };
    },
  },
  methods: {
    startSave() {
      this.startSubmit = true;
      if (!this.isValid) return;
      this.submit();
    },
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
