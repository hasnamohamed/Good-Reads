import { IBook } from "./ibook";

export interface IBookResponse {
    books: IBook[],
    totalPages: number
  }
