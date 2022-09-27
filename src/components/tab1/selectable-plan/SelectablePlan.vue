<template>
  <article>
    <h3>{{ description }}</h3>
    <ul>
      <li v-for="service in services">{{ service }}</li>
    </ul>
    <input
      :id="id"
      type="radio"
      :value="description"
      name="plans"
      v-model="selectedPlan"
      @click="handleInputChange"
    />
    <label :for="id">Elegir régimen</label>
  </article>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(["inputId"]);
const props = defineProps(["description", "services", "id"]);
const selectedPlan = ref("Solo Alojamiento");
const handleInputChange = (e) => {
  emit("inputId", e.target.id);
};
</script>

<style lang="scss" src="./SelectablePlan.scss"></style>
<style></style>
