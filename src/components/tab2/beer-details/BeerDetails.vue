<template>
  <div class="beer-details">
    <h1>{{ selectedBeer.name }}</h1>
    <p>Display the content of the beer with ID {{ beerId }} here!</p>
    <pre>{{ selectedBeer }}</pre>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
const beerId = route.params.id;

/* 
const beersData = computed(() => store.getters.getBeersData);
const selectedBeer = beersData.value.find(
  (beer) => beer.id === parseInt(beerId)
); 
*/

const selectedBeer = computed(() => store.getters.getBeerById(beerId));
</script>

<style></style>
