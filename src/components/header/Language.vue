<script setup lang="ts"></script>

<template>
  <div class="language">
    <Icon name="language" />
    <span class="font-bold cursor-pointer">中文</span>|
    <span class="cursor-not-allowed" title="尚未開放">英文</span>
  </div>
</template>

<style lang="scss" scoped>
.language {
  @apply flex justify-center items-center;

  span {
    @apply px-2 text-sm;
  }
}
</style>
