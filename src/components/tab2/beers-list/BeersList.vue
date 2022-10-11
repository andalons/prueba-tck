<template>
  <section>
    <h2 class="beers-title">Cervezas</h2>
    <!--   <pre>{{ beersData }}</pre> -->
    <ul class="beers-list">
      <li class="beers-list__item" v-for="beer in beersData" :key="beer.id">
        <BeerCard :beer="beer" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import BeerCard from "../beer-card/BeerCard.vue";

const store = useStore();
const beersData = computed(() => store.getters.getBeersData);
</script>

<style lang="scss" src="./BeersList.scss"></style>
