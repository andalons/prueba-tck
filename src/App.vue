<script setup>
import { RouterView } from "vue-router";

import AppHeader from "./components/header/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <main class="page-main"><RouterView /></main>
</template>

<style scoped></style>
