<template>
  <div class="shopping-cart-container" v-if="isActive">
    <h4 class="title">Shopping Cart</h4>
    <ul class="table">
      <li class="table__header">
        <h4 class="">#</h4>
        <h4 class="">Item</h4>
        <h4 class="">Price</h4>
        <h4 class="">Amount</h4>
        <h4 class="">Total</h4>
      </li>
      <ShoppingCartItem
        class="table__item"
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
      <ShoppingCartTotal class="table__footer" />
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import ShoppingCartItem from "../shopping-cart-item/ShoppingCartItem.vue";
import ShoppingCartTotal from "../shopping-cart-total/ShoppingCartTotal.vue";

const store = useStore();
const items = computed(() => store.getters.getShoppingCart);
const isActive = computed(() => store.getters.getShoppingCartVisibility);
</script>

<style lang="scss" src="./ShoppingCart.scss"></style>
