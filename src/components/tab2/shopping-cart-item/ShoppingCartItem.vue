<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td scope="col">{{ item.name }}</td>
    <td scope="col">{{ item.price }}</td>
    <td scope="col" class="amount-col">
      <button class="amount-col__button" @click="decrease(item.id)">-</button>
      <p>{{ item.amount }}</p>
      <button class="amount-col__button" @click="increase(item.id)">+</button>
    </td>
    <td scope="col">{{ (item.amount * item.price).toFixed(2) }}</td>
  </tr>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const props = defineProps(["item"]);

const increase = (id) => {
  store.commit("increase", id);
};
const decrease = (id) => {
  store.commit("decrease", id);
};
</script>

<style lang="scss" src="./ShoppingCartItem.scss"></style>
