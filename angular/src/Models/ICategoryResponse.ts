import { ICategory } from "./icategory";

export interface ICategoryResponse {
    Cats: ICategory[],
    totalPages: number
  }