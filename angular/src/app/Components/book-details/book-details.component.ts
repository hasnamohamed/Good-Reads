import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IBook } from 'src/Models/iBook';
import { BookService } from 'src/Services/books.service';
import {IAuthor} from "../../../Models/iauthor";
import {AuthorServiceService} from "../../../Services/author-service.service";
import {StarRatingColor} from "../Shared/star-rating/star-rating.component";
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book: any| null = null
  book_id:string
  starCount:number=5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  isLoading=true

  onRatingChanged(rating: any) {
    this.book.rating.rate = rating.rating;
  }
  constructor(
    private active_route:ActivatedRoute,
    private book_service:BookService,
    private router:Router
  ){
    this.book_id = this.active_route.snapshot.paramMap.get('id') ?? ''
  }
  ngOnInit(): void {
    this.book_service.getBookById(this.book_id).subscribe(book=>{
      this.book = book
      this.isLoading=false
    })
  }
  deleteBook(){
    this.book_service.deleteBook(this.book_id).subscribe(book=>{
      alert("deleted successfully")
      this.router.navigateByUrl('/books')
    })
  }
}
