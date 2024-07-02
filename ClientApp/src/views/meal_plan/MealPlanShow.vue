<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { mealPlansData } from "../../data/meal_plans_data";

const route = useRoute();

const mealPlan = ref(
  mealPlansData.find((mealPlan) => `${mealPlan.id}` === route.params.id)
);
</script>

<template>
  <div v-if="mealPlan">
    <h1>{{ mealPlan.weekDay }} - {{ mealPlan.recipe.name }}</h1>
    <div v-for="ingredient in mealPlan.recipe.ingredients" :key="ingredient.id">
      {{ ingredient.name }}
    </div>
  </div>
</template>
