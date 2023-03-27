import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {StarRatingColor} from "../../Shared/star-rating/star-rating.component";
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input('item') item: any = {};
  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;

  ngOnInit() {
  }

  @ViewChild('teams') teams!: ElementRef;
  selectedStatus = 0;

  onSelected(): void {
    this.selectedStatus = this.teams.nativeElement.value;
  }

  onRatingChanged(rating: any) {
    this.item.rating.rate = rating.rating;
  }
}