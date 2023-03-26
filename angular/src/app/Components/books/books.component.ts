import {Component, OnInit} from '@angular/core';
import { BookService } from 'src/Services/books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any;
  constructor(private service:BookService) {
  }
  ngOnInit() {
    this.service.getBooks()
      .subscribe(response => {
        this.books = response;
      });
  }
}
