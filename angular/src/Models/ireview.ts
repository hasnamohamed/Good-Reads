import { RegistrationInfo} from "./userInfo";
import { IBook } from "./ibook";
export interface IReview {
  _id?:string;
  userId:RegistrationInfo;
  bookId:IBook;
  review:string;
  rating:string;
}
