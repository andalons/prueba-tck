<script setup>
import data from "@/data/hotelPlans.json";
import HotelPlanList from "../components/tab1/hotel-plan-list/HotelPlanList.vue";

const hotelPlans = data;
</script>

<template>
  <section class="tab1 tab-main">
    <h2>Hotel Mieres del Camín Apartamentos</h2>
    <HotelPlanList :hotelPlans="hotelPlans" />
  </section>
</template>

<style></style>
