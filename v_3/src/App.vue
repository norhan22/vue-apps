<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/login">login</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "src/assets/main";
</style>
