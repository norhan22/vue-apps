<template>
  <nav v-if="username">
    <router-link to="/home">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/users">Users Management</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "src/assets/main";
</style>
