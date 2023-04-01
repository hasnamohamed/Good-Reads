import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { IAuthor } from 'src/Models/iauthor';
import { AuthorServiceService } from 'src/Services/author-service.service';

@Component({
  selector: 'app-Authors',
  templateUrl: './Authors.component.html',
  styleUrls: ['./Authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors_list : IAuthor[] = []
  numberPages : number[] = []
  pageSize:number = 8;
  pageNumber:number = 1;
  totalPages:number = 1;
  isLoading = true;

  constructor(private author_service:AuthorServiceService) {}

  ngOnInit():void {
      this.fetchData()
      
  };


  fetchData()
  {
    this.author_service.getAllAuthors(this.pageNumber,this.pageSize).subscribe(response=>{
        this.authors_list = response.authors
        console.log(this.authors_list);
        
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

//  addAuthor(){
//   this.author_service.addAuthor(this.newAuthor).subscribe(au=>{
//     alert('added successfully')
//   })
//  }


//  update(){
//   this.author_service.updateAuthor('641b90c78edf885de515c9e3',this.newAuthor).subscribe(author=>{
//     alert('updated s')
//   })
//  }

}
