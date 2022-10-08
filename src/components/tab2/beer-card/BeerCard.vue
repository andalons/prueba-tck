<template>
  <article class="beer-card">
    <div class="beer-card__img-container">
      <img :src="img" :alt="name" class="image" />
    </div>
    <div class="beer-card__info-container">
      <div class="top">
        <h3 class="title">{{ name }}</h3>
        <p class="description">{{ description }}</p>
      </div>
      <div class="bottom">
        <p class="pairing">
          Ideal to pair with:
          <span v-for="(pairing, index) in pairings" key="index"
            >{{ pairing }}<span v-if="index < pairings.length - 1">, </span>
            <span v-else>.</span>
          </span>
        </p>
      </div>
    </div>
    <div class="beer-card__abv-container">
      <p class="abv" :class="defineAbvColor(abv)">{{ abv }}</p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps(["img", "name", "description", "pairings", "abv"]);
function defineAbvColor(abv) {
  if (abv <= "5") return "abv--low";
  else if (abv >= "5.1" && abv <= "10") return "abv--med";
  else if (abv > "10") return "abv--high";
}
</script>

<style lang="scss" src="./BeerCard.scss"></style>
