<template>
  <ul>
    <li v-for="plan in hotelPlans" :key="plan.id">
      <!--  :class="[plan.id === planId ? 'isActive' : '']" -->
      <!-- @active-card="toggleClass2" -->
      <HotelPlanCard
        :title="plan.title"
        :services="plan.services"
        :id="plan.id"
      />
    </li>
  </ul>
</template>

<script setup>
/* import { ref } from "vue"; */
import HotelPlanCard from "../hotel-plan-card/HotelPlanCard.vue";
const props = defineProps(["hotelPlans"]);
/* const planId = ref(1);
const toggleClass2 = (e) => {
  console.log("recibo de emits:", e);
  planId = e;
}; */
</script>

<style lang="scss" src="./HotelPlanList.scss"></style>
