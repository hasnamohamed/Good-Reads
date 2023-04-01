import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/Models/icategory';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-Categories',
  templateUrl: './Categories.component.html',
  styleUrls: ['./Categories.component.css']
})
export class CategoriesComponent implements OnInit {
  cats_list : ICategory[] = []
  numberPages : number[] = []
  pageSize:number = 8;
  pageNumber:number = 1;
  totalPages:number = 1;
  constructor(private category_service:CategoryService) { }

  ngOnInit():void {
    this.fetchData()
  }


  fetchData()
  {
    this.category_service.getAllCategories(this.pageNumber,this.pageSize).subscribe(response=>{
        this.cats_list = response.cats
        console.log(response)

        this.totalPages = response.totalPages
        console.log(this.cats_list)
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
