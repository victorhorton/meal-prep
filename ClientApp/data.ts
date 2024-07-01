import { type Tag } from "./types/tag";
import { type Ingredient } from "./types/ingredient";
import { type Recipe } from "./types/recipe";

export const tags: Tag[] = [
  { id: 1, name: "American" },
  { id: 2, name: "Low Carb" },
  { id: 3, name: "Vegetarian" },
  { id: 4, name: "Dessert" },
  { id: 5, name: "Italian" },
  { id: 6, name: "Breakfast" },
  { id: 7, name: "Spicy" },
];

export const ingredients: Ingredient[] = [
  {
    id: 1,
    name: "Flour",
    description: "All-purpose flour",
    tags: [tags[3], tags[5]],
  },
  {
    id: 2,
    name: "Sugar",
    description: "Granulated white sugar",
    tags: [tags[4]],
  },
  { id: 3, name: "Eggs", description: "Large eggs", tags: [tags[6]] },
  { id: 4, name: "Milk", description: "Whole milk", tags: [tags[6], tags[5]] },
  {
    id: 5,
    name: "Chicken",
    description: "Boneless, skinless chicken breasts",
    tags: [tags[0], tags[2]],
  },
  { id: 6, name: "Salt", description: "Table salt", tags: [] },
  {
    id: 7,
    name: "Pepper",
    description: "Ground black pepper",
    tags: [tags[6]],
  },
  {
    id: 8,
    name: "Olive Oil",
    description: "Extra virgin olive oil",
    tags: [tags[5], tags[2]],
  },
  {
    id: 9,
    name: "Tomatoes",
    description: "Fresh Roma tomatoes",
    tags: [tags[5]],
  },
  { id: 10, name: "Basil", description: "Fresh basil leaves", tags: [tags[5]] },
];

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Pancakes",
    description: "Fluffy homemade pancakes",
    ingredients: [
      ingredients[0],
      ingredients[2],
      ingredients[3],
      ingredients[5],
      ingredients[6],
    ],
    tags: [tags[6], tags[0]],
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    description:
      "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper",
    ingredients: [
      ingredients[0],
      ingredients[2],
      ingredients[3],
      ingredients[5],
      ingredients[6],
      ingredients[9],
    ],
    tags: [tags[5]],
  },
  {
    id: 3,
    name: "Chicken Salad",
    description: "Healthy chicken salad with fresh vegetables",
    ingredients: [
      ingredients[4],
      ingredients[6],
      ingredients[7],
      ingredients[8],
    ],
    tags: [tags[2], tags[1]],
  },
  {
    id: 4,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake",
    ingredients: [
      ingredients[0],
      ingredients[1],
      ingredients[2],
      ingredients[3],
      ingredients[5],
    ],
    tags: [tags[4]],
  },
  {
    id: 5,
    name: "Tomato Basil Soup",
    description: "Fresh and flavorful tomato basil soup",
    ingredients: [
      ingredients[8],
      ingredients[9],
      ingredients[7],
      ingredients[5],
      ingredients[6],
    ],
    tags: [tags[5], tags[3]],
  },
];
