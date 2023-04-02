import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/Services/user-auth.service';
import { UsersService } from 'src/Services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuredGuard implements CanActivate {

  private currentUserStatus:boolean = false;
  constructor(private userService:UsersService, private routerService:Router){
    this.userService.updateUserStatus()

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.userService.currentUserStatus.subscribe(userStatus => this.currentUserStatus = userStatus.isLogedIn);

      if(this.currentUserStatus)
      {
        return true
      }
      else
      {
        this.routerService.navigate(['/login'])
        return false
      }

    }

}
