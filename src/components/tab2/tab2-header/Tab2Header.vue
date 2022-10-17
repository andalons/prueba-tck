<template>
  <div class="tab2-header">
    <h2 class="tab2-header__title">Bebidas</h2>
    <div class="tab2-header__cart">
      <p class="cart-amount">({{ cartAmount }})</p>
      <font-awesome-icon
        icon="fa-solid fa-cart-shopping"
        class="cart-icon"
        @click="toggleShoppingCart"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

const toggleShoppingCart = () => store.dispatch("toggleShoppingCart");
const cartAmount = computed(() => store.getters.getTotalAmount);
</script>

<style lang="scss" src="./Tab2Header.scss"></style>
