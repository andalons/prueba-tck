<template>
  <ul class="beers-list">
    <li class="beers-list__item" v-for="beer in beers" :key="beer.id">
      <BeerDetails
        :img="beer.imgage_url"
        :name="beer.name"
        :description="beer.description"
        :pairings="beer.food_pairing"
        :alcohol="beer.abv"
      />
    </li>
  </ul>
</template>

<script setup>
import BeerDetails from "../beer-details/BeerDetails.vue";

const props = defineProps(["beers"]);
</script>
