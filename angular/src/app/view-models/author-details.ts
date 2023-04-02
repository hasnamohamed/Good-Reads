import { IBook } from "src/Models/ibook";
import { IAuthor } from "src/Models/iauthor";

export interface AuthorDetails {
    author: IAuthor;
    books:IBook[];
}
