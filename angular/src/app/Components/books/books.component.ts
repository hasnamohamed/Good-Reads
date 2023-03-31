import {Component, OnInit} from '@angular/core';
import { BookService } from 'src/Services/books.service';
import {IBook} from 'src/Models/iBook';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books_list:IBook[]=[];
  numberPages : number[] = []
  pageNumber:number = 1;
  totalPages:number = 1;
  pageSize:number=6;
  isLoading=true;
  constructor(private book_service:BookService ) {
  }
  ngOnInit():void {
    this.fetchData()
  };
  fetchData()
  {
    this.book_service.getAllBooks(this.pageNumber,this.pageSize).subscribe(response=>{
      this.books_list = response.books
      this.totalPages = response.totalPages
      this.numberPages = []
      this.numberPages = Array.from({length: this.totalPages}, (_, i) => i + 1);
      this.isLoading=false;
    })
  }
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
