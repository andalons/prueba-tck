<template>
  <section class="tab1 tab-main">
    <h2>Hotel Mieres del Camín Apartamentos</h2>
    <HotelPlanList :hotelPlans="hotelPlans" />
  </section>
</template>

<script setup>
import plansData from "@/data/hotelPlans.json";
import HotelPlanList from "../components/tab1/hotel-plan-list/HotelPlanList.vue";
import { ref } from "vue";
const hotelPlans = ref(plansData);
</script>

<style></style>
