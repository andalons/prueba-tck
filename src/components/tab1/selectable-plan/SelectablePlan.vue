<template>
  <article :id="description" @click="updateSelection" class="plan">
    <div class="plan-description">
      <h3 class="plan-description__title">{{ description }}</h3>
      <div class="divider"></div>
      <ul class="plan-description__list">
        <li class="list-item" v-for="(service, index) in services" :key="index">
          {{ service }}
        </li>
      </ul>
    </div>

    <div
      class="plan-button"
      :class="{
        'plan-button--active-plan': selectedPlan === description,
      }"
    >
      <input
        class="plan-button__radio"
        type="radio"
        name="plans"
        :value="description"
        :id="id"
        v-model="selectedPlan"
      />
      <label class="plan-button__label" :for="id">Elegir régimen</label>
    </div>
  </article>
</template>

<script setup>
const props = defineProps(["description", "services", "id", "selectedPlan"]);
const emit = defineEmits();
const updateSelection = (e) => {
  emit("onUpdatePlan", e.currentTarget.id);
};
</script>

<style lang="scss" src="./SelectablePlan.scss"></style>
<style></style>
