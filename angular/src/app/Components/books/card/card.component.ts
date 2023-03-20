
import { Component,Input, OnInit } from '@angular/core';
import {StarRatingColor} from "../../Shared/star-rating/star-rating.component";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('item') item: any={};
  rating:number = 3;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  ngOnInit() {
  }
  onRatingChanged( rating:any){
    this.rating = rating.rating;
  }
}
