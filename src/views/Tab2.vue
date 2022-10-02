<template>
  <section class="tab2">
    <h2 class="tab2__title">Bebidas</h2>
    <BeersList class="beers-container" :beers="beersData" />
  </section>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import BeersList from "../components/tab2/beers-list/BeersList.vue";
const beersData = ref([]);
/* (async () => {
  const res = await axios.get("https://api.punkapi.com/v2/beers?per_page=10");
  beersData.value = res.data;
  console.log(res);
})(); */
onMounted(async () => {
  const res = await axios.get("https://api.punkapi.com/v2/beers?per_page=10");
  beersData.value = res.data;
  console.log(res);
});
</script>

<style lang="scss" src="./Tab2.scss"></style>
