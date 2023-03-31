import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/Models/iBook';
import { HomeServiceService } from 'src/Services/home-service.service';

@Component({
  selector: 'app-popular_books',
  templateUrl: './popular_books.component.html',
  styleUrls: ['./popular_books.component.css']
})

export class Popular_booksComponent implements OnInit {

  popular_books:IBook[] = []
  
  constructor(private home_service:HomeServiceService){}
  
  ngOnInit():void {
    this.home_service.getPopularBooks().subscribe(books=>{
      this.popular_books = books
    })    
};
}
