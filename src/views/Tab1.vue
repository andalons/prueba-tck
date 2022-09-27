<template>
  <section class="tab1 tab-main">
    <h2>Hotel Mieres del Camín Apartamentos</h2>
    <Plans :hotelPlans="hotelPlans" />
  </section>
</template>

<script setup>
import plansData from "@/data/hotelPlans.json";
import Plans from "../components/tab1/plans/Plans.vue";
import { ref } from "vue";
const hotelPlans = ref(plansData);
</script>

<style></style>
