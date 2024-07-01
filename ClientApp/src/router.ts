import { createRouter, createWebHistory } from "vue-router";
import RecipeIndex from "./views/recipes/RecipeIndex.vue";
import RecipeShow from "./views/recipes/RecipeShow.vue";

const routes = [
  {
    path: "/",
    name: "Recipes",
    component: RecipeIndex,
  },
  {
    path: "/:id",
    name: "Recipe Show",
    component: RecipeShow,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
