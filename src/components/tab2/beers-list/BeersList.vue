<template>
  <section>
    <h2 class="beers-title">Cervezas</h2>
    <ul class="beers-list">
      <li class="beers-list__item" v-for="beer in beers" :key="beer.id">
        <BeerDetails
          :img="beer.image_url"
          :name="beer.name"
          :description="beer.description"
          :pairings="beer.food_pairing"
          :abv="beer.abv"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
import BeerDetails from "../beer-details/BeerDetails.vue";

const props = defineProps(["beers"]);
</script>

<style lang="scss" src="./BeersList.scss"></style>
