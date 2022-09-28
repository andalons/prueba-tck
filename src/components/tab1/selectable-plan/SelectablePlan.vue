<template>
  <article :id="description" @click="updateSelection">
    <h3>{{ description }}</h3>
    <ul>
      <li v-for="(service, index) in services" :key="index">{{ service }}</li>
    </ul>
    <div>
      <input
        type="radio"
        name="plans"
        :value="description"
        :id="id"
        v-model="selectedPlan"
      />
      <label :for="id">Elegir régimen</label>
    </div>
  </article>
</template>

<script setup>
import { defineEmits } from "vue";
const props = defineProps(["description", "services", "id", "selectedPlan"]);
const emit = defineEmits();
const updateSelection = (e) => {
  emit("onUpdatePlan", e.currentTarget.id);
};
</script>

<style lang="scss" src="./SelectablePlan.scss"></style>
<style></style>
