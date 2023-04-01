import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { categoryInfo } from '../db-models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesURL:string = "http://localhost:9000/category"



  constructor(private http: HttpClient) { }


  getAllCate(pageNumber:string)
  {

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    return this.http.get(`${this.categoriesURL}?pageNumber=${pageNumber}`,
    {headers: headers, responseType:"text", observe: 'response'})

  }

  addCate(cateName:String)
  {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/text');

    return this.http.post(this.categoriesURL, {name:cateName},
    {responseType:"text", observe: 'response'})

  }

  updateCate(id:string, cateName:string)
  {
    let updateCateURL:string = `http://localhost:9000/category/${id}`
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/text');

    return this.http.put(updateCateURL, {name:cateName},
    {responseType:"text", observe: 'response'})
  }

  deleteCate(id:string)
  {
    let deleteCateURL:string = `http://localhost:9000/category/${id}`
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/text');

    return this.http.delete(deleteCateURL,
    {responseType:"text", observe: 'response'})

  }

}
