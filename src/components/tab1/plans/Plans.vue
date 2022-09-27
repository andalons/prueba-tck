<template>
  <ul>
    <li v-for="plan in hotelPlans" :key="plan.id">
      <!-- :class="[plan.id === planId ? 'isActive' : '']" -->
      <SelectablePlan
        :description="plan.description"
        :services="plan.services"
        :id="plan.id"
        @input-id="toggleClass"
      />
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import SelectablePlan from "../selectable-plan/SelectablePlan.vue";
const props = defineProps(["hotelPlans"]);
let planId = ref(1);
const toggleClass = (inputId) => {
  console.log(inputId);
  planId = inputId;
};
</script>

<style lang="scss" src="./Plans.scss"></style>
