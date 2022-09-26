<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink class="routerlink" to="/">Tab1</RouterLink>
      <RouterLink class="routerlink" to="/tab-2">Tab2</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
