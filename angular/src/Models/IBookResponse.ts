import { IAuthor } from "./iauthor";

export interface IAuthorResponse {
    authors: IAuthor[],
    totalPages: number
  }