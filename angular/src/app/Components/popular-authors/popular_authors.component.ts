import { Component, OnInit } from '@angular/core';
import { populatedBook } from 'src/Models/books-populated';
import { IAuthor } from 'src/Models/iauthor';
import { HomeServiceService } from 'src/Services/home-service.service';

@Component({
  selector: 'app-popular_authors',
  templateUrl: './popular_authors.component.html',
  styleUrls: ['./popular_authors.component.css']
})
export class Popular_authorsComponent implements OnInit {

  popular_books:populatedBook[] = []
  popular_authors: IAuthor[] = []
  constructor(private home_service:HomeServiceService){}
  
  ngOnInit():void {
    this.getPopularAuthor()
    console.log(this.popular_authors);
    console.log(this.popular_books);
};

getPopularAuthor()
{
  this.home_service.getPopularBooks().subscribe(books=>{
    this.popular_books = books
    this.popular_books.forEach(book => {
      const author = book.authorId
      if(!this.popular_authors.find(a=>a._id ===author._id))
        this.popular_authors.push(author)
    });
  }) 
}
}
