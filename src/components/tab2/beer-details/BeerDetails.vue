<template>
  <article>
    <img src="" alt="" />
    <div class="">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
      <p>
        Ideal to pair with:
        <span v-for="(pairing, index) in pairings" key="index"
          >{{ pairing }}<span v-if="index < pairings.length - 1">, </span>
          <span v-else>.</span>
        </span>
      </p>
    </div>
    <div>{{ alcohol }}</div>
  </article>
</template>

<script setup>
const props = defineProps([
  "img",
  "name",
  "description",
  "pairings",
  "alcohol",
]);
</script>
