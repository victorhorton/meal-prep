import { createRouter, createWebHistory } from "vue-router";
import RecipeIndex from "./views/recipes/RecipeIndex.vue";
import RecipeShow from "./views/recipes/RecipeShow.vue";
import MealPlanIndex from "./views/meal_plan/MealPlanIndex.vue";
import MealPlanShow from "./views/meal_plan/MealPlanShow.vue";

const routes = [
  {
    path: "/recipes",
    name: "Recipes",
    component: RecipeIndex,
  },
  {
    path: "/recipes/:id",
    name: "Recipe Show",
    component: RecipeShow,
  },
  {
    path: "/meal-plan",
    name: "Meal Plan",
    component: MealPlanIndex,
  },
  {
    path: "/meal-plan/:id",
    name: "Meal Plan Show",
    component: MealPlanShow,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
