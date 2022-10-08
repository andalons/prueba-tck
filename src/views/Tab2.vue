<template>
  <section class="tab2">
    <h2 class="tab2__title">Bebidas</h2>
    <pre>{{ beersData }}</pre>
    <!--  <BeersList class="beers-container" /> -->
  </section>
</template>

<script setup>
//import axios from "axios";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import BeersList from "../components/tab2/beers-list/BeersList.vue";
/*
const beersData = ref([]);
onMounted(async () => {
  const res = await axios.get("https://api.punkapi.com/v2/beers?per_page=10");
  beersData.value = res.data;
  console.log(res);
});*/
const store = useStore();
onMounted(async () => {
  store.dispatch("fetchData");
});
const beersData = computed(() => store.state.beersData);
</script>

<style lang="scss" src="./Tab2.scss"></style>
