import { type Tag } from "./types/tag";
import { type Ingredient } from "./types/ingredient";
import { type Recipe } from "./types/recipe";

export const tagsData: Tag[] = [
  { id: 1, name: "American" },
  { id: 2, name: "Low Carb" },
  { id: 3, name: "Vegetarian" },
  { id: 4, name: "Dessert" },
  { id: 5, name: "Italian" },
  { id: 6, name: "Breakfast" },
  { id: 7, name: "Spicy" },
];

export const ingredientsData: Ingredient[] = [
  {
    id: 1,
    name: "Flour",
    description: "All-purpose flour",
    tags: [tagsData[3], tagsData[5]],
  },
  {
    id: 2,
    name: "Sugar",
    description: "Granulated white sugar",
    tags: [tagsData[4]],
  },
  { id: 3, name: "Eggs", description: "Large eggs", tags: [tagsData[6]] },
  {
    id: 4,
    name: "Milk",
    description: "Whole milk",
    tags: [tagsData[6], tagsData[5]],
  },
  {
    id: 5,
    name: "Chicken",
    description: "Boneless, skinless chicken breasts",
    tags: [tagsData[0], tagsData[2]],
  },
  { id: 6, name: "Salt", description: "Table salt", tags: [] },
  {
    id: 7,
    name: "Pepper",
    description: "Ground black pepper",
    tags: [tagsData[6]],
  },
  {
    id: 8,
    name: "Olive Oil",
    description: "Extra virgin olive oil",
    tags: [tagsData[5], tagsData[2]],
  },
  {
    id: 9,
    name: "Tomatoes",
    description: "Fresh Roma tomatoes",
    tags: [tagsData[5]],
  },
  {
    id: 10,
    name: "Basil",
    description: "Fresh basil leaves",
    tags: [tagsData[5]],
  },
];

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
