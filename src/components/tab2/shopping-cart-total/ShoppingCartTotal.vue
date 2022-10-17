<template>
  <li>
    <h4>Total price</h4>
    <div>
      <span>{{ totalPrice }}</span
      >€
    </div>
  </li>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

const totalPrice = computed(() => store.getters.getTotalPrice.toFixed(2));
</script>

<style lang="scss" src="./ShoppingCartTotal.scss"></style>
