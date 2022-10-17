<template>
  <div class="shopping-cart-container" v-if="isActive">
    <h3 class="title">Shopping Cart</h3>
    <p v-if="Object.keys(items).length === 0" class="empty-cart-message">
      You haven't selected any beers yet... Aren't you thirsty? Start shopping!
    </p>
    <div v-else class="table">
      <div class="table__header">
        <h4 class="">#</h4>
        <h4 class="">Item</h4>
        <h4 class="">Price</h4>
        <h4 class="">Amount</h4>
        <h4 class="">Total</h4>
      </div>
      <div class="table__body">
        <ul class="items-list">
          <ShoppingCartItem v-for="item in items" :key="item.id" :item="item" />
        </ul>
      </div>
      <ShoppingCartTotal class="table__footer" />
    </div>
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
