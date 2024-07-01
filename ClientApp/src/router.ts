import { createRouter, createWebHistory } from "vue-router";
import RecipeIndex from "./views/recipes/RecipeIndex.vue";

const routes = [
  {
    path: "/",
    name: "Recipes",
    component: RecipeIndex,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
