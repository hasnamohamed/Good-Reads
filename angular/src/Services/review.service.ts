import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IReviewResponse} from "../Models/iReviewResponse";
import {IReview} from "../Models/ireview";
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private http: HttpClient) { }
  getAllReviews(bookId:any) : Observable<IReviewResponse>
  {
    const params = new HttpParams()
      .set('bookId',bookId.toString())
    return this.http.get<IReviewResponse>('http://localhost:9000/review',{params})
  }

  getReviewById(review_id:string) : Observable<IReview>
  {
    return this.http.get<IReview>(`http://localhost:9000/review/${review_id}`)
  }
  addReview(review:IReview) : Observable<IReview>
  {
    return this.http.post <IReview> ('http://localhost:9000/review',review,this.httpOptions)
  }
  deleteReview(review_id:string) : Observable<IReview>
  {
    return this.http.delete <IReview> (`http://localhost:9000/review/${review_id}`,this.httpOptions)
  }
  updateReview(review_id:string,review:IReview) : Observable<IReview>
  {
    return this.http.put <IReview> (`http://localhost:9000/review/${review_id}`,review)
  }
}
