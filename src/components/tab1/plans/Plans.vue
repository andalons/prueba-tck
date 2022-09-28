<template>
  <ul>
    <li v-for="plan in hotelPlans" :key="plan.id">
      <SelectablePlan
        :description="plan.description"
        :services="plan.services"
        :id="plan.id"
        :selected-plan="selectedPlan"
        @onUpdatePlan="updateSelectedPlan"
        :class="{ 'active-plan': selectedPlan === plan.description }"
      />
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import SelectablePlan from "../selectable-plan/SelectablePlan.vue";
const props = defineProps(["hotelPlans"]);
const selectedPlan = ref("Solo Alojamiento");
const updateSelectedPlan = (plan) => {
  selectedPlan.value = plan;
};
</script>

<style lang="scss" src="./Plans.scss"></style>
