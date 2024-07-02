<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { recipesData } from "../../data/recipes_data";

const route = useRoute();

const recipe = ref(
  recipesData.find((recipe) => `${recipe.id}` === route.params.id)
);
</script>

<template>
  <div v-if="recipe">
    <h1>{{ recipe.name }}</h1>
    <div v-for="ingredient in recipe.ingredients" :key="ingredient.id">
      {{ ingredient.name }}
    </div>
  </div>
</template>
