import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IAuthor } from 'src/Models/iauthor';
import { IBook } from 'src/Models/iBook';
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
  author_books:any = []
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
    this.getBookData()
  }

  getAuhtorData()
  {
    this.author_service.getAuthorById(this.author_id).subscribe(author=>{
      this.author = author
  })
  }


  getBookData()
  {
    this.books_service.getBooks().subscribe(book=>{
      this.author_books = book
    })
  }
}

