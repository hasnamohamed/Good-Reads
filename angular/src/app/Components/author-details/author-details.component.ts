import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IAuthor } from 'src/Models/iauthor';
import { AuthorServiceService } from 'src/Services/author-service.service';

@Component({
  selector: 'author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit{
  author_id:string
  author: IAuthor | null = null
  constructor(
    private active_route:ActivatedRoute,
    private author_service:AuthorServiceService,
    private router:Router
    ){
    this.author_id = this.active_route.snapshot.paramMap.get('id') ?? ''
  }

  ngOnInit(): void {
    this.author_service.getAuthorById(this.author_id).subscribe(author=>{
      this.author = author
    })
  }
   deleteAuthor(){
    this.author_service.deleteAuthor(this.author_id).subscribe(au=>{
      alert("deleted successfully")
      this.router.navigateByUrl('/authors')
    })
  }
}
