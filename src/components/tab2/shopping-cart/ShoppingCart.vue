<template>
  <div class="shopping-cart-container">
    <h4 class="title">Shopping Cart</h4>
    <table class="table">
      <thead class="table__header">
        <tr>
          <th scope="col" class="">#</th>
          <th scope="col" class="">Item</th>
          <th scope="col" class="">Amount</th>
          <th scope="col" class="">Total</th>
        </tr>
      </thead>
      <tbody id="items">
        <ShoppingCartItem />
      </tbody>
      <tfoot class="table__footer">
        <ShoppingCartTotal />
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import ShoppingCartItem from "../shopping-cart-item/ShoppingCartItem.vue";
import ShoppingCartTotal from "../shopping-cart-total/ShoppingCartTotal.vue";
</script>

<style lang="scss" src="./ShoppingCart.scss"></style>
