import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BookService } from 'src/Services/books.service';
import {IAuthor} from "../../../Models/iauthor";
import {AuthorServiceService} from "../../../Services/author-service.service";
import {StarRatingColor} from "../Shared/star-rating/star-rating.component";
import {ReviewService} from "../../../Services/review.service";
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Input('book') book: any = {};
  author:any;
  reviews:any;
  authorId:any=this.book.authorId;
  book_id:string
  starCount:number=5;
  userRating:number=3;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  isLoading=true

  onRatingChanged(rating: any) {
    this.userRating= rating.rating;
  }
  constructor(
    private active_route:ActivatedRoute,
    private book_service:BookService,
    private router:Router,
    private author_service:AuthorServiceService,
    private review_service:ReviewService
  ){
    this.book_id = this.active_route.snapshot.paramMap.get('id') ?? ''
  }
  ngOnInit(): void {
    this.book_service.getBookById(this.book_id).subscribe(book=>{
      this.book = book
      this.fetchAuthorsData()
      this.fetchReviewsData()
    })



  }
  @ViewChild('status') status!: ElementRef;
  selectedStatus = 0;
  onSelected(): void {
    this.selectedStatus = this.status.nativeElement.value;
  }
  fetchAuthorsData(){
    this.review_service.getAllReviews(this.book._id).subscribe(response=>{
      this.reviews=response;
    })
  }
  //get reviews by book id
  fetchReviewsData(){
    this.author_service.getAuthorById(this.book.authorId).subscribe(response=>{
      this.author=response;
    })
  }
  deleteBook(){
    this.book_service.deleteBook(this.book_id).subscribe(book=>{
      alert("deleted successfully")
      this.router.navigateByUrl('/books')
    })
  }
}
