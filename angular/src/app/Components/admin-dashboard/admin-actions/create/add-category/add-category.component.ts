import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class addCategoryComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  addCat()
  {
    alert("Add successfully")
  }

}
