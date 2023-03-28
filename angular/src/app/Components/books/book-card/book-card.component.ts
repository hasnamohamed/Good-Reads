import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {StarRatingColor} from "../../Shared/star-rating/star-rating.component";
import {BookService} from "../../../../Services/books.service";
import {AuthorServiceService} from "../../../../Services/author-service.service";
import {IAuthor} from "../../../../Models/iauthor";
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
  author:IAuthor={
    "name":"auth1",
    "birth":new Date,
    "bio":"new bio "
  };
  authorId:any;
  constructor(private author_service:AuthorServiceService) {
  }
  ngOnInit() {
    this.fetchAuthorsData()
    console.log(this.authorId)
  }
  fetchAuthorsData(){
    this.author_service.getAuthorById(this.authorId).subscribe(response=>{
      console.log(response)
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
