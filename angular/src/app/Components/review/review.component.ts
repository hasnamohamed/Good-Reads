import {Component, Input} from '@angular/core';
import {StarRatingColor} from "../Shared/star-rating/star-rating.component";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  @Input('review') review: any = {};
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
    onRatingChanged(rating: any) {
    this.review.rating = rating.rating;
  }
}
