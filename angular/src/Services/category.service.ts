import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/Models/icategory';
import { HttpHeaders } from '@angular/common/http';
import { ICategoryResponse } from 'src/Models/ICategoryResponse';
import { IBookResponse } from 'src/Models/IBookResponse';
import { populatedBook } from 'src/Models/books-populated';

@Injectable({
  providedIn: 'root'
})


export class CategoryService {

httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http:HttpClient) { }

  getAllCategories(pageNumber:number,pageSize:number) : Observable<ICategoryResponse>
  {

    const params = new HttpParams()

    .set('pageNumber',pageNumber.toString())
    .set('pageSize',pageSize.toString())

    return this.http.get<ICategoryResponse> ('http://localhost:9000/category',{params})
  }


  // getBooksByCat(category_id:string , pageNumber:number ) : Observable<populatedBook>
  // {
  //   const params = new HttpParams()
  //   .set('pageNumber',pageNumber.toString())
  //   return this.http.get<populatedBook>(`http://localhost:9000/category/${category_id}`,{params})
  // }

  getBooksByCat(category_id:string , pageNumber:number )
  {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');


    const params = new HttpParams()
    .set('pageNumber',pageNumber.toString())
    return this.http.get(`http://localhost:9000/category/${category_id}`,{params,headers: headers, responseType:"text",observe:"response"})
  }

  getCategory(category_id:string) : Observable<ICategory>
  {
    return this.http.get<ICategory>(`http://localhost:9000/category/one/${category_id}`)
  }

  addCategory(category:ICategory) : Observable<ICategory>
  {
   return this.http.post <ICategory> ('http://localhost:9000/category',category,this.httpOptions)
  }

  deleteCategory(category_id:string) : Observable<ICategory>
  {
    return this.http.delete <ICategory> (`http://localhost:9000/category/${category_id}`,this.httpOptions)
  }

  updateCategory(category_id:string,category:ICategory) : Observable<ICategory>
  {
    return this.http.put <ICategory> (`http://localhost:9000/category/${category}`,category)
  }

}
