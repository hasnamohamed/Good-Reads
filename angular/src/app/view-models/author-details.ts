import { IBook } from "src/Models/iBook";
import { IAuthor } from "src/Models/iauthor";

export interface AuthorDetails {
    author: IAuthor;
    books:IBook[];
}
