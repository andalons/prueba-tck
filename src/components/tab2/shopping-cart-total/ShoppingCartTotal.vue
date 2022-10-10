<template>
  <tr>
    <th scope="row" colspan="4">Total price</th>
    <td>
      <span>{{ totalPrice }}</span
      >€
    </td>
  </tr>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

const totalPrice = computed(() => store.getters.totalPrice);
</script>

<style lang="scss" src="./ShoppingCartTotal.scss"></style>
