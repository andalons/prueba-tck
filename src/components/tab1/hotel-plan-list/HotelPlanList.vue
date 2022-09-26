<script setup>
import HotelPlanCard from "../hotel-plan-card/HotelPlanCard.vue";
const props = defineProps(["hotelPlans"]);
</script>

<template>
  <ul>
    <li v-for="plan in hotelPlans" :key="plan.id">
      <HotelPlanCard
        :title="plan.title"
        :services="plan.services"
        :id="plan.id"
      />
    </li>
  </ul>
</template>

<style lang="scss">
@import "./HotelPlanList.scss";
</style>
