import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from 'src/Models/iauthor';
import { HttpHeaders } from '@angular/common/http';
import { IAuthorResponse } from 'src/Models/IAuthorResponse';


@Injectable({
  providedIn: 'root'
})


export class AuthorServiceService {

httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http:HttpClient) { }

  getAllAuthorsis(pageNumber:number)
  {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    return this.http.get(`http://localhost:9000/author/?pageNumber=${pageNumber}`,
    {headers: headers, responseType:"text", observe: 'response'})
  }



  //get all authors
  getAllAuthors(pageNumber:number,pageSize?:number) : Observable<IAuthorResponse>
  {
    const params = new HttpParams()

    .set('pageNumber',pageNumber.toString())
    .set('pageSize',pageSize!.toString())

    return this.http.get <IAuthorResponse> ('http://localhost:9000/author',{params})
  }


  //get one author by id
  getAuthorById(author_id:string) : Observable<IAuthor>
  {
    return this.http.get<IAuthor>(`http://localhost:9000/author/${author_id}`)
  }

  //add author
  addAuthor(author:FormData)
  {
      const headers = new HttpHeaders()
      .set('Content-Type', 'multipart/form-data');


    return this.http.post('http://localhost:9000/author', author,
    {responseType:"text", observe: 'response'})

  }

  //delete author
  deleteAuthor(author_id:string) : Observable<IAuthor>
  {
    return this.http.delete <IAuthor> (`http://localhost:9000/author/${author_id}`,this.httpOptions)
  }

  updateAuthor(author_id:string,author:IAuthor) : Observable<IAuthor>
  {
    return this.http.put <IAuthor> (`http://localhost:9000/author/${author_id}`,author)
  }

}
