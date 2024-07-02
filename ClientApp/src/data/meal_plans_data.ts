import { MealPlan } from "../types/meal_plan";
import { recipesData } from "./recipes_data";

export const mealPlansData: MealPlan[] = [
  { id: 1, weekDay: "Monday", recipe: recipesData[1] },
  { id: 2, weekDay: "Tuesday", recipe: recipesData[2] },
  { id: 3, weekDay: "Wednesday", recipe: recipesData[3] },
  { id: 4, weekDay: "Thursday", recipe: recipesData[4] },
  { id: 5, weekDay: "Friday", recipe: recipesData[4] },
  { id: 6, weekDay: "Saturday", recipe: recipesData[0] },
  { id: 7, weekDay: "Sunday", recipe: recipesData[1] },
];
