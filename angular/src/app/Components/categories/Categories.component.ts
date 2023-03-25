import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Categories',
  templateUrl: './Categories.component.html',
  styleUrls: ['./Categories.component.css']
})
export class CategoriesComponent implements OnInit {
  cats = [
    {"name":"sport"},
    {"name":"science"},
    {"name":"history"},
    {"name":"Loe"},
    {"name":"travel"},
    {"name":"suspense"},
    {"name":"love"},
    {"name":"animals"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
