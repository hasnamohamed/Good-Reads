import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class addBookComponent implements OnInit {
  catList:any[] = ["horor", "comady", "drama"]
  autList:any[] = ["islam", "mohamed", "mohamed", "Hasna"]

  constructor() { }

  ngOnInit() {
  }

  addBook()
  {
    alert("Add succ")
  }

}
