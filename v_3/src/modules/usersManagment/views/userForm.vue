<template>
  <form @submit.prevent="startSave" method="get">
    <div class="mb-1">
      <label for="firstName"> First Name </label>
      <input
        v-model.trim="firstName"
        name="firstName"
        :class="{ error: invalidFirstName }"
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
        :class="{ error: inValidLastName }"
      />
      <span v-if="inValidLastName" class="error">
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
      />
      <span v-if="inValidEmail" class="error">Email is invalid</span>
    </div>

    <div>
      <button @click="startSave" class="mr-1">Save</button>
      <!--      <button @click="goTo('login')">Login</button>-->
    </div>
  </form>
</template>

<script>
import repository from "@/modules/usersManagment/Repository";

export default {
  name: "authSignup",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",

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
    show() {
      repository.getUser(this.userId).then((res) => {
        console.log(res);
      });
    },
    create() {
      repository.createUser(this.authData).then(() => {
        this.goTo("allUsers");
      });
    },
    update() {
      repository.updateuser(this.userId, this.authData).then(() => {
        this.goTo("allUsers");
      });
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
