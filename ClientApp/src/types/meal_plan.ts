import { Recipe } from "./recipe";

export type MealPlan = {
  id: number;
  weekDay: string;
  recipe: Recipe;
};
