<template>
  <div class="shopping-cart-container" v-if="isActive">
    <h4 class="title">Shopping Cart</h4>
    <table class="table">
      <thead class="table__header">
        <tr>
          <th scope="col" class="">#</th>
          <th scope="col" class="">Item</th>
          <th scope="col" class="">Price</th>
          <th scope="col" class="">Amount</th>
          <th scope="col" class="">Total</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <ShoppingCartItem v-for="item in items" :key="item.id" :item="item" />
      </tbody>
      <tfoot class="table__footer">
        <ShoppingCartTotal />
      </tfoot>
    </table>
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
