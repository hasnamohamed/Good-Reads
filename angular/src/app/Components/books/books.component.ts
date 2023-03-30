import {Component, OnInit} from '@angular/core';
import { BookService } from 'src/Services/books.service';
import {IBook} from 'src/Models/ibook';
import {AuthorServiceService} from "../../../Services/author-service.service";
import {IAuthor} from "../../../Models/iauthor";
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


  // better one that handel both success response and errors
  // and of course adding the images to the books
  fetchData()
  {
    this.book_service.getAllBooks(this.pageNumber).subscribe(
      successRes => {
        let books = JSON.parse(successRes.body || "")
        this.totalPages = books.totalPages
        books.books.forEach((book:any) => {
          book.image = "http://localhost:9000/" + book.image
        });

        this.books_list = books.books
        this.numberPages = []
        this.numberPages = Array.from({length: this.totalPages}, (_, i) => i + 1);

      },
      err => console.log(err));
  }

  // fetchData()
  // {
  //   this.book_service.getAllBooks(this.pageNumber).subscribe(response=>{
  //     this.books_list = response.body.books
  //     this.totalPages = response.totalPages
  //     this.numberPages = []
  //     this.numberPages = Array.from({length: this.totalPages}, (_, i) => i + 1);
  //   })
  // }

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
