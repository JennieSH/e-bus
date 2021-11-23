<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import Logo from "./Logo.vue";
import Language from "./Language.vue";

interface Props {
  isMenuOpen: boolean;
  routes: string[];
}

const props = defineProps<Props>();
const emit = defineEmits(["close-menu"]);
</script>

<template>
  <Transition name="slide-fade">
    <div v-if="isMenuOpen" class="flex h-screen w-full">
      <div class="w-1/3 bg-cust-black opacity-60"></div>
      <div class="flex-auto bg-white">
        <div class="flex p-3 items-center justify-between">
          <Logo @click.capture="$emit('close-menu')" />
          <Icon
            name="close"
            class-props="h-3 w-3 cursor-pointer"
            @click="$emit('close-menu')"
          />
        </div>

        <nav>
          <ul class="border-t border-cust-border">
            <li
              v-for="route in routes"
              :key="route"
              class="p-3 border-b border-cust-border hover:bg-cust-border"
              :title="route"
            >
              {{ route }}
            </li>
          </ul>
        </nav>

        <Language class="mt-5" />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>
