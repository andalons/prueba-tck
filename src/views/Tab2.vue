<template>
  <section class="tab2">
    <h2 class="tab2__title">Bebidas</h2>
    <p v-for="beer in beersData" :key="beer.id">{{ beer.name }}</p>
  </section>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const beersData = ref([]);
(async () => {
  const res = await axios.get("https://api.punkapi.com/v2/beers?per_page=10");
  beersData.value = res.data;
  console.log(res);
})();
</script>

<style lang="scss" src="./Tab2.scss"></style>
