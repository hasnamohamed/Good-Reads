import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {StarRatingColor} from "../../Shared/star-rating/star-rating.component";
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

  ngOnInit() {
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
