<script setup lang="ts">
import Header from "./components/header/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style lang="scss">
#app {
  @apply flex flex-col justify-between min-h-screen;
}
</style>
