import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpClient: HttpClient) { }
  private url = 'http://localhost:9000/book?page=1';
  getBooks(){
    return this.httpClient.get(this.url)
  }

}
