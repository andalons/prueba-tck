<template>
  <section class="tab2">
    <Tab2Header />
    <ShoppingCart />
    <BeersList class="beers-container" />
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { RouterView } from "vue-router";
import BeersList from "../../components/tab2/beers-list/BeersList.vue";
import ShoppingCart from "../../components/tab2/shopping-cart/ShoppingCart.vue";
import Tab2Header from "../../components/tab2/tab2-header/Tab2Header.vue";

const store = useStore();
onMounted(async () => {
  store.dispatch("fetchData");
});
</script>

<style lang="scss" src="./Tab2.scss"></style>
