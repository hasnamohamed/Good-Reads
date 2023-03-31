import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IAuthor } from 'src/Models/iauthor';
import { IBook } from 'src/Models/iBook';
import { IBookResponse } from 'src/Models/IBookResponse';
import { AuthorServiceService } from 'src/Services/author-service.service';
import { BookService } from 'src/Services/books.service';

@Component({
  selector: 'author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit{
  author_id:string 
  author: IAuthor | null = null
  author_books : IBook[] = []
  numberPages : number[] = []
  pageSize:number =20 ;
  pageNumber:number = 1;
  totalPages:number = 1;
  isLoading=true;
  
  constructor(
    private active_route:ActivatedRoute,
    private author_service:AuthorServiceService,
    private router:Router,
    private books_service:BookService
    ){
    this.author_id = this.active_route.snapshot.paramMap.get('id') ?? ''
  }
  
  ngOnInit(): void {
    this.getAuhtorData()
    this.getAuthorBooks()
    console.log(this.author_books.length); 
  }

  getAuhtorData()
  {
    this.author_service.getAuthorById(this.author_id).subscribe(author=>{
      this.author = author
      this.isLoading=false
  })
  }

  getAuthorBooks()
  {
    this.books_service.getAllBooks(this.pageNumber,this.pageSize).subscribe(response=>{
       this.author_books = response.books.filter(book=>{
          return book.authorId == this.author_id
      })
      this.totalPages = response.totalPages
      this.numberPages = []
      this.numberPages = Array.from({length: this.totalPages}, (_, i) => i + 1);
    })
  }

  getPage(pageNumber:number){
    this.pageNumber = pageNumber;
    this.getAuthorBooks()
  }
  previous()
  {
    if(this.pageNumber>1)
    {
      this.pageNumber--;
      this.getAuthorBooks()
    }
  }
  next()
  {
    if(this.pageNumber<this.totalPages)
    {
      this.pageNumber++;
      
    }

  }

 
}

