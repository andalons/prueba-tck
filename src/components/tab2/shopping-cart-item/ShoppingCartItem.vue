<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td scope="col">{{ item.name }}</td>
    <td scope="col">{{ item.price }}</td>
    <td scope="col" class="amount-col">
      <button class="amount-col__button">-</button>
      <p>{{ item.amount }}</p>
      <button class="amount-col__button">+</button>
    </td>
    <td scope="col">{{ (item.amount * item.price).toFixed(2) }}</td>
  </tr>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const props = defineProps(["item"]);
</script>

<style lang="scss" src="./ShoppingCartItem.scss"></style>
