<template>
  <section class="tab1">
    <h2 class="tab1__title">
      <span class="tab1__title--mod">Hotel </span> Mieres del Camín Apartamentos
      <div class="stars-container">
        <div class="star-icon" v-for="item in 4"></div>
      </div>
    </h2>
    <Plans class="tab1__container" :hotelPlans="hotelPlans" />
  </section>
</template>

<script setup>
import plansData from "@/data/hotelPlans.json";
import Plans from "../../components/tab1/plans/Plans.vue";
import { ref } from "vue";
const hotelPlans = ref(plansData);
</script>

<style lang="scss" src="./Tab1.scss"></style>
