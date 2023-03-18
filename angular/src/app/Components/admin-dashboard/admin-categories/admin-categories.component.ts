import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  adminActions:string = ""
  
  bookList:any[] = [
    {id:"6408c182bf5eeb7125c7f255", name:"Programming"},
    {id:"6408c182bf5eeb7125c7f255", name:"Programming"},
    {id:"6408c182bf5eeb7125c7f255", name:"Programming"},
    {id:"6408c182bf5eeb7125c7f255", name:"Programming"},
    {id:"6408c182bf5eeb7125c7f255", name:"Programming"},
    {id:"6408c182bf5eeb7125c7f255", name:"Programming"},
    {id:"6408c182bf5eeb7125c7f255", name:"Programming"},
    {id:"6408c182bf5eeb7125c7f255", name:"Programming"},
    {id:"6408c182bf5eeb7125c7f255", name:"Programming"}
  ]
  constructor() {
  
   }

  ngOnInit() {
  }


  getAdminAction(adminAction:string)
  {
    this.adminActions = adminAction;
  }

}
