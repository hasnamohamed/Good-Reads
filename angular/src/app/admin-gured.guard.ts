import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/Services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuredGuard implements CanActivate {

  constructor(private userAuth:UserAuthService, private routerService:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.userAuth.isLoged())
        return true
      else
      {
        this.routerService.navigate(['/login'])
        return false
      }

    }

}
