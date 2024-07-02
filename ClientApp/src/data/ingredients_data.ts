import { Ingredient } from "../types/ingredient";
import { tagsData } from "./tags_data";

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
