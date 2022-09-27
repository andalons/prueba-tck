<template>
  <article>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="service in services">{{ service }}</li>
    </ul>
    <div>
      <!-- esto iría dentro del input @change="toggleClass"  -->
      <input
        :id="id"
        type="radio"
        :value="title"
        name="plans"
        v-model="selectedPlan"
      />
      <label :for="id">Elegir régimen</label>
    </div>
  </article>
</template>

<script setup>
import { ref, defineEmits } from "vue";
/* const emit = defineEmits(["active-card"]);*/
const props = defineProps(["title", "services", "id"]);

const selectedPlan = ref("");
/* const toggleClass = (e) => {
  console.log("events:", e, e.target.id);
  emit("active-card", e.target.id);
  console.log(selectedPlan);
  console.log(e.target.value);
  console.log(props.title);
}; */
</script>

<style lang="scss" src="./HotelPlanCard.scss"></style>
