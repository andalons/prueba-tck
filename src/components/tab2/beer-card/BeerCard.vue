<template>
  <article class="beer-card" @click="() => handleRouterLink(beer.id)">
    <div class="beer-card__img-container">
      <img :src="beer.img" :alt="beer.name" class="image" />
    </div>
    <div class="beer-card__info-container">
      <div class="top">
        <h3 class="title">{{ beer.name }}</h3>
        <p class="description">{{ beer.description }}</p>
      </div>
      <div class="bottom">
        <p class="pairing">
          Ideal to pair with:
          <span v-for="(pairing, index) in beer.pairings" key="index"
            >{{ pairing
            }}<span v-if="index < beer.pairings.length - 1">, </span>
            <span v-else>.</span>
          </span>
        </p>
      </div>
    </div>
    <div class="beer-card__abv-container">
      <p class="abv" :class="defineAbvColor(beer.abv)">{{ beer.abv }}</p>
      <button class="btn" @click.stop="addItem(beer)">Add to cart</button>
    </div>
  </article>
</template>

<script setup>
import { useStore } from "vuex";
import { RouterLink, useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const props = defineProps(["beer"]);
function defineAbvColor(abv) {
  if (abv <= "5") return "abv--low";
  else if (abv >= "5.1" && abv <= "10") return "abv--med";
  else if (abv > "10") return "abv--high";
}

const addItem = (item) => {
  store.dispatch("addItemToCart", item);
};

const handleRouterLink = (beerId) => {
  router.push(`/tab-2/beers/${beerId}`);
};
</script>

<style lang="scss" src="./BeerCard.scss"></style>
