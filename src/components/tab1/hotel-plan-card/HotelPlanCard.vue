<script setup>
const props = defineProps(["title", "services", "id"]);
</script>

<template>
  <article>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="service in services">{{ service }}</li>
    </ul>
    <div>
      <label :for="id">
        <input :id="id" type="radio" :value="title" name="plans" />
        Elegir régimen
      </label>
    </div>
  </article>
</template>

<style lang="scss">
@import "./HotelPlanCard.scss";
</style>
