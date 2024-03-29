import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/Services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuredGuard implements CanActivate, OnInit {

  private currentUserStatus:boolean = false;
  constructor(private userService:UsersService, private routerService:Router){
    this.userService.currentUserStatus.subscribe(
      userStatus =>
       {
        this.currentUserStatus = userStatus.isAdmin
        if(userStatus.isAdmin)
          this.routerService.navigate(['/admin-dashboard'])
        else
        {
          swal({
            title: "Access Denied",
            icon : "error"
          });

          if(userStatus.isLogedIn)
            this.routerService.navigate(['/'])
        }
      });
  }

  ngOnInit(): void {

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
