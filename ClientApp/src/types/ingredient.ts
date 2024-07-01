import { Tag } from "./tag";

export type Ingredient = {
  id: number;
  name: string;
  description: string;
  tags: Tag[];
};
