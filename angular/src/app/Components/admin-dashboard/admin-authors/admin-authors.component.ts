import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-authors',
  templateUrl: './admin-authors.component.html',
  styleUrls: ['./admin-authors.component.css']
})
export class AdminAuthorsComponent implements OnInit {
  adminActions:string = ""

  authorList:any[] = [
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", firstName:"Islam", lastName:"saman", dateOfBirth:"12-12-2022"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", firstName:"Islam", lastName:"saman", dateOfBirth:"12-12-2022"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", firstName:"Islam", lastName:"saman", dateOfBirth:"12-12-2022"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", firstName:"Islam", lastName:"saman", dateOfBirth:"12-12-2022"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", firstName:"Islam", lastName:"saman", dateOfBirth:"12-12-2022"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", firstName:"Islam", lastName:"saman", dateOfBirth:"12-12-2022"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", firstName:"Islam", lastName:"saman", dateOfBirth:"12-12-2022"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", firstName:"Islam", lastName:"saman", dateOfBirth:"12-12-2022"},
    {id:"6408c182bf5eeb7125c7f255", photo:"https://picsum.photos/200", firstName:"Islam", lastName:"saman", dateOfBirth:"12-12-2022"}
  ]
  constructor() {
    console.log(this.authorList)
   }

  ngOnInit() {
  }


  getAdminAction(adminAction:string)
  {
    this.adminActions = adminAction;
  }

}
