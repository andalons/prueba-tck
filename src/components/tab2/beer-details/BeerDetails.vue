<template>
  <div class="beer-details">
    <h1>Página de detalle</h1>
    <p>Display the content of the beer with ID {{ beerId }} here!</p>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
const beerId = route.params.id;
</script>

<style></style>
