import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {IBookResponse} from "../Models/IBookResponse";
import {tap} from "rxjs/operators";
import { IBook } from 'src/Models/ibook';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private http: HttpClient) { }

  getAllBooks(pageNumber:number)
  {

    return this.http.get(`http://localhost:9000/book/?pageNumber=${pageNumber}`,
    {headers: this.httpOptions.headers, responseType:"text", observe: 'response'})

  }

  // getAllBooks(pageNumber:number) : Observable<IBookResponse>
  // {
  //   const params = new HttpParams()
  //     .set('pageNumber',pageNumber.toString())

  //   return this.http.get<IBookResponse>('http://localhost:9000/book',{params})

  // }


  getBookById(book_id:string) : Observable<IBook>
  {
    return this.http.get<IBook>(`http://localhost:9000/book/${book_id}`)
  }
  addBook(book:FormData)
  {
    return this.http.post('http://localhost:9000/book', book,
    {responseType:"text", observe: 'response'})
  }

  updateBook(book_id:string,book:FormData)
  {
    return this.http.put(`http://localhost:9000/book/${book_id}`, book,
    {responseType:"text", observe: 'response'})

  }

  deleteBook(book_id:string)
  {
    return this.http.delete(`http://localhost:9000/book/${book_id}`,
    {responseType:"text", observe: 'response'})
  }

}
