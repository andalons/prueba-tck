<template>
  <li class="content">
    <p class="content__col">{{ item.id }}</p>
    <p class="content__col">{{ item.name }}</p>
    <p class="content_col">{{ item.price }}</p>
    <p class="content__col amount-col">
      <button class="amount-col__button" @click="decrease(item.id)">-</button>
      <span class="amount-col__text">{{ item.amount }}</span>
      <button class="amount-col__button" @click="increase(item.id)">+</button>
    </p>
    <p class="table-content_col">
      {{ (item.amount * item.price).toFixed(2) }}
    </p>
  </li>
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
