<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/header/Header.vue";
</script>

<template>
  <Header />
  <main class="page-main"><RouterView /></main>
</template>

<style scoped></style>
