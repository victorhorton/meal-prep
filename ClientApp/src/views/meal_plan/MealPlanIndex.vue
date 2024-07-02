<script setup lang="ts">
import { ref } from "vue";
import { mealPlansData } from "../../data/meal_plans_data";

const mealPlans = ref(mealPlansData);
</script>

<template>
  <div v-for="mealPlan in mealPlans" :key="mealPlan.id">
    {{ mealPlan.weekDay }} - {{ mealPlan.recipe.name }}
  </div>
</template>
