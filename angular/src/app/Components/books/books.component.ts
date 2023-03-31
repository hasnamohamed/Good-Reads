import {Component, OnInit} from '@angular/core';
import { BookService } from 'src/Services/books.service';
import {AuthorServiceService} from "../../../Services/author-service.service";
import {IAuthor} from "../../../Models/iauthor";
import { IBook } from 'src/Models/iBook';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books_list:IBook[]=[];
  authors_list : IAuthor[] = []
  numberPages : number[] = []
  pageNumber:number = 1;
  totalPages:number = 1;
  constructor(private book_service:BookService ,private author_service:AuthorServiceService) {
  }
  ngOnInit():void {
    this.fetchData()
  };
  fetchData()
  {
    this.book_service.getAllBooks(this.pageNumber).subscribe(response=>{
      this.books_list = response.books
      this.totalPages = response.totalPages
      this.numberPages = []
      this.numberPages = Array.from({length: this.totalPages}, (_, i) => i + 1);
    })
  }

  fetchCategoriesData(){}
  getPage(pageNumber:number){
    this.pageNumber = pageNumber;
    this.fetchData()
  }
  previous()
  {
    if(this.pageNumber>1)
    {
      this.pageNumber--;
      this.fetchData()
    }
  }
  next()
  {
    if(this.pageNumber<this.totalPages)
    {
      this.pageNumber++;
      this.fetchData()
    }

  }

}