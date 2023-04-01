import { Component, OnInit } from '@angular/core';
import { populatedBook } from 'src/Models/books-populated';
import { ICategory } from 'src/Models/icategory';
import { HomeServiceService } from 'src/Services/home-service.service';

@Component({
  selector: 'app-popular_categories',
  templateUrl: './popular_categories.component.html',
  styleUrls: ['./popular_categories.component.css']
})
export class Popular_categoriesComponent implements OnInit {

  popular_books:populatedBook[] = []
  popular_cats: ICategory[] = []
  constructor(private home_service:HomeServiceService){}
  
  ngOnInit():void {
    this.getPopularAuthor()
 };

getPopularAuthor()
{
  this.home_service.getPopularBooks().subscribe(books=>{
    this.popular_books = books
    this.popular_books.forEach(book => {
      const cat = book.cateId
      if(!this.popular_cats.find(a=>a._id ===cat._id))
        this.popular_cats.push(cat)
    });
  }) 
}

}
