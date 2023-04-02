import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  loginStatus:string ="";
  constructor(private userService:UsersService, private routerService:Router) {
   }

  // isLogedIn()
  // {
  //   this.userService.currentUserStatus.subscribe(userStatus => this.loginStatus = userStatus);
  //   if(this.loginStatus == "true")
  //    return true
  //   else
  //     return false
  // }
}
