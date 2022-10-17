<template>
  <div class="cart-total">
    <h4 class="cart-total__title">Total price</h4>
    <p class="cart-total__price">{{ totalPrice + "€" }}</p>
    <button class="cart-total__button" @click="empty">Empty cart</button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

const totalPrice = computed(() => store.getters.getTotalPrice.toFixed(2));
const empty = () => {
  store.dispatch("emptyCart");
};
</script>

<style lang="scss" src="./ShoppingCartTotal.scss"></style>
