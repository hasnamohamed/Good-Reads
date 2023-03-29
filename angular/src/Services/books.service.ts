import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from 'src/Models/ibook';
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
  /*
    فيه مشكلة هنا اننا محتاجين الرسيبونس كامل عشان نقدر نوصل
    للـ status code
    وبالتالى نقدر ناخد قرار بناء على الكود اللى راجع

    عشان نعمل كدا هنحتاج اننا نضيف خيار
    observer
    ولكن دا هيرجع رسيبونس كامل
    فازاى هيخزنه فى
    IBookResponse

  */
  getAllBookss(pageNumber:number)
  {

    return this.http.get(`http://localhost:9000/book/?pageNumber=${pageNumber}`,
    {headers: this.httpOptions.headers, responseType:"text", observe: 'response'})

  }

  getAllBooks(pageNumber:number) : Observable<IBookResponse>
  {
    const params = new HttpParams()
      .set('pageNumber',pageNumber.toString())

    return this.http.get<IBookResponse>('http://localhost:9000/book',{params})

  }


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

  deleteBook(book_id:string) : Observable<IBook>
  {
    return this.http.delete <IBook> (`http://localhost:9000/book/${book_id}`,this.httpOptions)
  }

}
