import { IAuthor } from "src/Models/iauthor";
import { categoryInfo } from "../app/db-models/category";

export interface populatedBook
{
  _id?:string;
  rating?:{
    rate:number,
    totalVotes: number,
    totalPoints: number,
  }
  title:string;
  description:string;
  image?:string;
  authorId:IAuthor
  cateId:categoryInfo
}
