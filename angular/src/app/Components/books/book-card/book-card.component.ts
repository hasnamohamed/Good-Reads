import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {StarRatingColor} from "../../Shared/star-rating/star-rating.component";
import {BookService} from "../../../../Services/books.service";
import {AuthorServiceService} from "../../../../Services/author-service.service";
import {IAuthor} from "../../../../Models/iauthor";
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input('book') book: any = {};
  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  author: any;
  authorId:any=this.book.authorId;


  constructor(private author_service:AuthorServiceService, private cat_service:CategoriesService) {
  }
  ngOnInit() {
    this.fetchAuthorsData()
  }
  fetchAuthorsData(){
    this.author_service.getAuthorById(this.book.authorId).subscribe(response=>{
      this.author=response;
      console.log(this.author.name)
    })
  }
  @ViewChild('status') status!: ElementRef;
  selectedStatus = 0;

  onSelected(): void {
    this.selectedStatus = this.status.nativeElement.value;
  }

  onRatingChanged(rating: any) {
    this.book.rating.rate = rating.rating;
  }
}
