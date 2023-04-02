import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() name!:string;
@Input() image?:string;
img:string = "http://localhost:9000/"
  constructor() { }
  ngOnInit() {
  }

}
