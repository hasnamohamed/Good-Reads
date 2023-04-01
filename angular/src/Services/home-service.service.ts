import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { populatedBook } from 'src/Models/books-populated';
import { IAuthor } from 'src/Models/iauthor';
import { IBook } from 'src/Models/ibook';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

constructor(private http:HttpClient) { }

  getPopularBooks():Observable<populatedBook[]>
  {
    return this.http.get<populatedBook[]> ('http://localhost:9000/book/popular')
  }

}
