<template>
  <header class="page-header">
    <nav class="page-nav">
      <RouterLink class="routerlink" to="/">Tab1</RouterLink>
      <RouterLink class="routerlink" to="/tab-2">Tab2</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss">
@import "./AppHeader.scss";
</style>
