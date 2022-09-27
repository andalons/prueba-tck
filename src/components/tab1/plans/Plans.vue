<template>
  <ul>
    <li v-for="plan in hotelPlans" :key="plan.id">
      <SelectablePlan
        :description="plan.description"
        :services="plan.services"
        :id="plan.id"
        @onUpdatePlan="updateActivePlan"
        :class="{ 'active-plan': activePlan === plan.description }"
        :selectedPlan="selectedPlan"
      />
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import SelectablePlan from "../selectable-plan/SelectablePlan.vue";
const props = defineProps(["hotelPlans"]);
const selectedPlan = ref("Solo Alojamiento");
const activePlan = ref("Solo Alojamiento");
const updateActivePlan = (plan) => {
  activePlan.value = plan;
};
</script>

<style lang="scss" src="./Plans.scss"></style>
