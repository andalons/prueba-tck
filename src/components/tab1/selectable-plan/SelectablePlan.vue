<template>
  <article>
    <h3>{{ description }}</h3>
    <ul>
      <li v-for="service in services">{{ service }}</li>
    </ul>
    <input
      type="radio"
      name="plans"
      :value="description"
      :id="id"
      v-model="selectedPlan"
      @click="updateActivePlan"
    />
    <label :for="id">Elegir régimen</label>
  </article>
</template>

<script setup>
import { defineEmits } from "vue";
const props = defineProps(["description", "services", "id", "selectedPlan"]);
const emit = defineEmits();
const updateActivePlan = (e) => {
  emit("onUpdatePlan", e.target.value);
};
</script>

<style lang="scss" src="./SelectablePlan.scss"></style>
<style></style>
