import { Recipe } from "../types/recipe";
import { ingredientsData } from "./ingredients_data";
import { tagsData } from "./tags_data";

export const recipesData: Recipe[] = [
  {
    id: 1,
    name: "Pancakes",
    description: "Fluffy homemade pancakes",
    ingredients: [
      ingredientsData[0],
      ingredientsData[2],
      ingredientsData[3],
      ingredientsData[5],
      ingredientsData[6],
    ],
    tags: [tagsData[6], tagsData[0]],
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    description:
      "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper",
    ingredients: [
      ingredientsData[0],
      ingredientsData[2],
      ingredientsData[3],
      ingredientsData[5],
      ingredientsData[6],
      ingredientsData[9],
    ],
    tags: [tagsData[5]],
  },
  {
    id: 3,
    name: "Chicken Salad",
    description: "Healthy chicken salad with fresh vegetables",
    ingredients: [
      ingredientsData[4],
      ingredientsData[6],
      ingredientsData[7],
      ingredientsData[8],
    ],
    tags: [tagsData[2], tagsData[1]],
  },
  {
    id: 4,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake",
    ingredients: [
      ingredientsData[0],
      ingredientsData[1],
      ingredientsData[2],
      ingredientsData[3],
      ingredientsData[5],
    ],
    tags: [tagsData[4]],
  },
  {
    id: 5,
    name: "Tomato Basil Soup",
    description: "Fresh and flavorful tomato basil soup",
    ingredients: [
      ingredientsData[8],
      ingredientsData[9],
      ingredientsData[7],
      ingredientsData[5],
      ingredientsData[6],
    ],
    tags: [tagsData[5], tagsData[3]],
  },
];
