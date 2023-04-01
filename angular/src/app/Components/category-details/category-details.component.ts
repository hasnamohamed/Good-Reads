import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/Services/books.service';
import {IBook} from 'src/Models/ibook';
import { populatedBook } from 'src/Models/books-populated';
import { ICategory } from 'src/Models/icategory';
import { CategoryService } from 'src/Services/category.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})

export class CategoryDetailsComponent implements OnInit {
  category_id:string 
  category: ICategory | null = null
  books_list:populatedBook[]=[];
  numberPages : number[] = []
  pageNumber:number = 1;
  totalPages:number = 1;
  constructor(private category_service:CategoryService,
    private active_route:ActivatedRoute,
    private router:Router ) {
      this.category_id = this.active_route.snapshot.paramMap.get('id') ?? ''
  }
  ngOnInit():void {
    this.fetchData()
  };
  fetchData()
  {
    this.category_service.getBooksByCat(this.category_id , this.pageNumber).subscribe(response=>{
      this.books_list =JSON.parse(response.body || "")
      this.totalPages = response.totalPages
      this.numberPages = []
      this.numberPages = Array.from({length: this.totalPages}, (_, i) => i + 1);
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

