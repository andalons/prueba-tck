<template>
  <section class="tab2">
    <div class="tab2__header">
      <h2 class="title">Bebidas</h2>
      <font-awesome-icon icon="fa-solid fa-cart-shopping" class="cart-icon" />
    </div>
    <ShoppingCart />
    <BeersList class="beers-container" />
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import BeersList from "../components/tab2/beers-list/BeersList.vue";
import ShoppingCart from "../components/tab2/shopping-cart/ShoppingCart.vue";

const store = useStore();
onMounted(async () => {
  store.dispatch("fetchData");
});
</script>

<style lang="scss" src="./Tab2.scss"></style>
