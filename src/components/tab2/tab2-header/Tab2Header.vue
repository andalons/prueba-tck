<template>
  <div class="tab2-header">
    <h2 class="tab2-header__title">Bebidas</h2>
    <font-awesome-icon
      icon="fa-solid fa-cart-shopping"
      class="tab2-header__icon"
      @click="toggleShoppingCart"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();

const toggleShoppingCart = () => store.dispatch("toggleShoppingCart");
</script>

<style lang="scss" src="./Tab2Header.scss"></style>
