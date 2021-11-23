<script setup lang="ts">
import { ref } from "vue";
import Logo from "./Logo.vue";
import MobileMenu from "./MobileMenu.vue";
import Language from "./Language.vue";

const routes = ["附近站牌", "路線規劃", "站點查詢", "收藏站牌"];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header
    class="relative flex items-center justify-between px-4 shadow-3xl lg:px-16"
  >
    <!-- logo -->
    <Logo />

    <!-- pc menu -->
    <nav class="hidden flex-shrink lg:block">
      <ul class="flex justify-center w-full">
        <li
          v-for="route in routes"
          :key="route"
          class="px-7 py-7 hover:bg-cust-border"
          :title="route"
        >
          {{ route }}
        </li>
      </ul>
    </nav>

    <!-- pc language -->
    <div class="hidden lg:block"><Language /></div>

    <!-- mobile burger -->
    <div class="flex items-center ml-auto my-5 lg:hidden">
      <p class="text-[13px]">{{ "附近站牌" }}</p>
      <Icon
        name="menu"
        class-props="ml-4 h-6 w-6 cursor-pointer"
        @click="toggleMenu"
      />
    </div>

    <!-- mobile menu -->
    <MobileMenu
      class="absolute top-0 left-0 lg:hidden"
      :is-menu-open="isMenuOpen"
      :routes="routes"
      @close-menu="toggleMenu"
    />
  </header>
</template>
