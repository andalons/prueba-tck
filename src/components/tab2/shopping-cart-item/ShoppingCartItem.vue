<template>
  <tr class="content">
    <th scope="row" class="content__row">{{ item.id }}</th>
    <td scope="col" class="content__col">{{ item.name }}</td>
    <td scope="col" class="content_col">{{ item.price }}</td>
    <td scope="col" class="content__col amount-col">
      <button class="amount-col__button" @click="decrease(item.id)">-</button>
      <span class="amount-col__text">{{ item.amount }}</span>
      <button class="amount-col__button" @click="increase(item.id)">+</button>
    </td>
    <td scope="col" class="table-content_col">
      {{ (item.amount * item.price).toFixed(2) }}
    </td>
  </tr>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const props = defineProps(["item"]);

const increase = (id) => {
  store.dispatch("increaseNumberOfItems", id);
};
const decrease = (id) => {
  store.dispatch("decreaseNumberOfItems", id);
};
</script>

<style lang="scss" src="./ShoppingCartItem.scss"></style>
