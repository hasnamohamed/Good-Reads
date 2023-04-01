import { ICategory } from "./icategory";

export interface ICategoryResponse {
    cats: ICategory[],
    totalPages: number
  }
