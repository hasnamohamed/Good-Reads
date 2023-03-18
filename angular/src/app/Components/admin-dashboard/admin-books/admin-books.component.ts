import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnInit {
  adminActions:string = ""

  bookList:any[] = [
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", name:"C++ for begniners", CategoryId:"1235", AuthorId:"15894"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", name:"C++ for begniners", CategoryId:"1235", AuthorId:"15894"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", name:"C++ for begniners", CategoryId:"1235", AuthorId:"15894"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", name:"C++ for begniners", CategoryId:"1235", AuthorId:"15894"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", name:"C++ for begniners", CategoryId:"1235", AuthorId:"15894"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", name:"C++ for begniners", CategoryId:"1235", AuthorId:"15894"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", name:"C++ for begniners", CategoryId:"1235", AuthorId:"15894"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", name:"C++ for begniners", CategoryId:"1235", AuthorId:"15894"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", name:"C++ for begniners", CategoryId:"1235", AuthorId:"15894"}
  ]


  constructor() { }


  login() {
  }

  ngOnInit() {
  }

  getAdminAction(adminAction:string)
  {
    this.adminActions = adminAction;
  }

}
