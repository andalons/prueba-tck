<template>
  <article :id="description" @click="updateSelection" class="plan">
    <h3 class="plan__title">{{ description }}</h3>
    <ul class="plan__services-list">
      <li
        class="service-list-item"
        v-for="(service, index) in services"
        :key="index"
      >
        {{ service }}
      </li>
    </ul>
    <div class="plan__button">
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
