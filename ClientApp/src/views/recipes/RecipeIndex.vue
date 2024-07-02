<script lang="ts" setup>
import { ref } from "vue";
import { recipesData } from "../../data/recipes_data";

const recipes = ref(recipesData);
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <div v-for="recipe in recipes" :key="recipe.id">{{ recipe.name }}</div>
  </div>
</template>
