<template>
  <div>
    <button @click="goTo('createUser')" id="goToCreate">Create user</button>
    <div class="">
      <div v-for="(user,i) in users" :key="i" class="flex">

        <p>{{ user.firstName + " " + user.lastName }}</p>
        <router-link :to="{name:'editUser',params:{id:user.id}}"> Edit</router-link>
        <button @click="deleteUser(user.id)" :class="{'loading':loadingDeleteUser}"> Delete</button>
        <span v-if="error" class="error">{{ error }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import repository from '../Repository/users'

export default {
  name: "listPage",
  data: () => {
    return {
      loadingUsers: false,
      loadingDeleteUser: false,
      users: [],
      error: ''
    }
  },
  methods: {
    ////////////////////
    // APIs
    ////////////////////
    getUsers() {
      this.users = []
      this.loadingUsers = true
      repository.getUsers()
          .then((res) => {
            this.users = res.data.data
          })
          .finally(() => {
            this.loadingUsers = false
          })
    },
    deleteUser(userId) {
      this.loadingDeleteUser = true
      repository.deleteUser(userId)
          .then((res) => {
            this.getUsers()
          })
          .catch((err) => {
            this.error = err.data
          })
          .finally(() => {
            this.loadingDeleteUser = false
          })
    }
  },
  created() {
    this.getUsers()
  }
};
</script>

<style scoped></style>
