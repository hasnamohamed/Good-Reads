import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  isLogedIn:string ="";
  constructor(private userService:UsersService, private routerService:Router) {
   }

  isLoged()
  {
    this.userService.currentUserStatus.subscribe(userStatus => this.isLogedIn = userStatus);
    if(this.isLogedIn == "true")
     return true
    else
      return false
  }
}
