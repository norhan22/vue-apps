<template>
  <form @submit.prevent="startSave" method="get">
    <div class="mb-1">
      <label for="firstName"> First Name </label>
      <input
          v-model.trim="firstName"
          name="firstName"
          :class="{ error: invalidFirstName }"
          :disabled="loading"
      />
      <span v-if="invalidFirstName" class="error">
        Please enter a first Name with at least seven letters.
      </span>
    </div>
    <div class="mb-1">
      <label for="lastName"> last Name </label>
      <input
          v-model.trim="lastName"
          name="lastName"
          :class="{ error: invalidLastName }"
          :disabled="loading"
      />
      <span v-if="invalidLastName" class="error">
        Please enter a last Name with at least seven letters.
      </span>
    </div>
    <div class="mb-1">
      <label for="email"> Email </label>
      <input
          type="email"
          v-model="email"
          name="email"
          :class="{ error: inValidEmail }"
          :disabled="loading"
      />
      <span v-if="inValidEmail" class="error">Email is invalid</span>
    </div>

    <div>
      <button @click="startSave" class="mr-1" :class="{loading:loading}" :disabled="loading">Save</button>
      <span class="error" v-if="apiError">{{ apiError }}</span>
    </div>
  </form>
</template>

<script>
import repository from "@/modules/usersManagment/Repository/users";

export default {
  name: "authSignup",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      startSubmit: false,
      loading: false,
      apiError: ''
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
    invalidFirstName() {
      return (
          this.startSubmit &&
          (!this.firstName.length || this.firstName.trim().length < 7)
      );
    },
    invalidLastName() {
      return (
          this.startSubmit &&
          (!this.lastName.length || this.lastName.trim().length < 7)
      );
    },
    isValid() {
      return (
          !this.invalidFirstName && !this.inValidEmail && !this.invalidLastName
      );
    },
    authData() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };
    },
    userId() {
      return this.$route.params.id || null;
    },
  },
  methods: {
    /////////////////////////
    // APIs
    //////////////////////
    catchError(err) {
      this.apiError = Object.values(err.response.data.data).join("\n")
    },
    show() {
      this.loading = true
      repository.getUser(this.userId)
          .then((res) => {
            console.log(res);
          })
          .catch(this.catchError)
          .finally(() => {
            this.loading = false
          })
    },
    create() {
      this.loading = true
      repository.createUser(this.authData)
          .then(() => {
            this.goTo("allUsers");
          })
          .catch(this.catchError)
          .finally(() => {
            this.loading = false
          })
    },
    update() {
      this.loading = true
      repository.updateuser(this.userId, this.authData)
          .then(() => {
            this.goTo("allUsers");
          })
          .catch(this.catchError)
          .finally(() => {
            this.loading = false
          })
    },
    ///////////////////////////
    startSave() {
      this.startSubmit = true;
      if (!this.isValid) return;
      this.submit();
    },
    submit() {
      if (this.userId) this.update();
      else this.create();
    },
  },
  created() {
    if (this.userId) this.show();
  },
};
</script>

<style scoped></style>
