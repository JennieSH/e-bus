<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

interface Props {
  name: string;
  classProps: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  classProps: "h-4 w-4"
});
</script>

<template>
  <svg :class="classProps">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>
