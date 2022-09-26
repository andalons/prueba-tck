<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Tab1</RouterLink>
      <RouterLink to="/tab-2">Tab2</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
