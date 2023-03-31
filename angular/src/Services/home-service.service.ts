import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/Models/iBook';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

constructor(private http:HttpClient) { }

  getPopularBooks():Observable<IBook[]>
  {
    return this.http.get<IBook[]> ('http://localhost:9000/book/popular')
  }

}
