<script setup lang="ts"></script>

<template>
  <main class="error-container">
    <h1>Error 404</h1>
    <h2 class="my-2 uppercase">This page doesn’t exist.</h2>

    <RouterLink class="text-sm hover:text-gray-600" to="/">
      ＜ Back to Home page
    </RouterLink>
  </main>
</template>

<style lang="scss" scoped>
.error-container {
  @apply flex flex-col justify-center items-center;

  h1 {
    @apply mb-10 px-4 text-[3rem] text-gray-300;

    animation: twinkle 0.5s alternate infinite;
  }
}

@keyframes twinkle {
  from {
    box-shadow: inset -3px 0 0 rgb(255, 211, 17);
  }

  to {
    box-shadow: inset -3px 0 0 transparent;
  }
}
</style>
