import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/Services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserDashBoardGuard implements CanActivate {

  private currentUserStatus:boolean = false;
  constructor(private userService:UsersService, private routerService:Router){
    this.userService.currentUserStatus.subscribe(
      userStatus =>
       {

        this.currentUserStatus = userStatus.isLogedIn
        if(userStatus.isLogedIn)
          this.routerService.navigate(['/user-dashboard'])
        else
        {
          swal({
            title: "Access Denied",
            icon : "error"
          });
        }
      });
  }

  canActivate()
  {
    if(this.currentUserStatus)
    {
      return true
    }
    else
    {
      return false
    }

  }

}
