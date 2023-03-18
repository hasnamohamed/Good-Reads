import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addAuthor()
  {
    alert("Add succ")
  }

}
