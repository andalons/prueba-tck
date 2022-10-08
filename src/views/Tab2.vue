<template>
  <section class="tab2">
    <h2 class="tab2__title">Bebidas</h2>

    <BeersList class="beers-container" />
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import BeersList from "../components/tab2/beers-list/BeersList.vue";

const store = useStore();
onMounted(async () => {
  store.dispatch("fetchData");
});
</script>

<style lang="scss" src="./Tab2.scss"></style>
