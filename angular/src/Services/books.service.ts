import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from 'src/Models/iBook';
import { HttpHeaders } from '@angular/common/http';
import {IBookResponse} from "../Models/IBookResponse";
import {tap} from "rxjs/operators";
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
  getAllBooks(pageNumber:number,pageSize:number) : Observable<IBookResponse>
  {
    const params = new HttpParams()
      .set('pageNumber',pageNumber.toString())
      .set('pageSize',pageSize.toString())
    return this.http.get<IBookResponse>('http://localhost:9000/book',{params})
  }


  getBookById(book_id:string) : Observable<IBook>
  {
    return this.http.get<IBook>(`http://localhost:9000/book/${book_id}`)
  }
  addBook(book:IBook) : Observable<IBook>
  {
    return this.http.post <IBook> ('http://localhost:9000/book',book,this.httpOptions)
  }
  deleteBook(book_id:string) : Observable<IBook>
  {
    return this.http.delete <IBook> (`http://localhost:9000/book/${book_id}`,this.httpOptions)
  }
  updateBook(book_id:string,book:IBook) : Observable<IBook>
  {
    return this.http.put <IBook> (`http://localhost:9000/author/${book_id}`,book)
  }
}
