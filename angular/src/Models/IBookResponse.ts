import { IBook } from "./iBook";

export interface IBookResponse {
    books: IBook[],
    totalPages: number
  }
