import { Ingredient } from "./ingredient";
import { Tag } from "./tag";

export type Recipe = {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  tags: Tag[];
};
