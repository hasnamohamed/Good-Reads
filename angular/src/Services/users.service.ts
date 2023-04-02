import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { loginInfo, RegistrationInfo, restInfo, tokenInfo, userStatus } from '../Models/userInfo';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private regUrl:string = "http://localhost:9000/register"
  private logUrl:string = "http://localhost:9000/login"
  private logoutUrl:string = "http://localhost:9000/logout"
  private resetUrl:string = "http://localhost:9000/reset"
  private userStatusURL = "http://localhost:9000/userStatus"

  private headerOptions = new HttpHeaders()
  .set('Content-Type', 'application/json')

  tokenInfo:tokenInfo = {
    email:"",
    token:"",
    expiresIn:"",
    userImage:"",
    userStatus:{
      isLogedIn:false,
      isAdmin:false
    }
  };

  private userStatusInfo:userStatus = {
    isLogedIn:false,
    isAdmin:false
  };

  private userStatus = new BehaviorSubject(this.userStatusInfo);
  currentUserStatus = this.userStatus.asObservable();

  constructor(private http: HttpClient, private routerService:Router) { }

  register(userInfo:FormData)
  {
    return this.http.post(this.regUrl, userInfo,
    {responseType:"text", observe: 'response'})

  }

  login(userInfo:loginInfo)
  {

    return this.http.post(this.logUrl, userInfo,
    {headers: this.headerOptions, responseType:"text", observe: 'response'})

  }


  logout()
  {
    let userInfo = JSON.parse(localStorage.getItem("userInfo")!)
    return this.http.post(this.logoutUrl, {token:userInfo.token},
    {headers: this.headerOptions, responseType:"text", observe: 'response'})
  }

  resetPass(claimAccount:restInfo)
  {
    return this.http.post(this.resetUrl, claimAccount,
    {headers: this.headerOptions, responseType:"text", observe: 'response'})
  }



  updateUserStatus(givenUserStatus?:userStatus)
  {
    console.log(givenUserStatus)
    if(givenUserStatus != undefined)
    {
      this.userStatus.next(givenUserStatus)
      return
    }

    let userInfo = JSON.parse(localStorage.getItem("userInfo")!)
    console.log(userInfo)
    if(userInfo == null)
    {
      this.routerService.navigate(['/login'])
    }

      let userToken = userInfo.token;
      const toknedHeader = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-access-token', userToken);

      this.http.get(this.userStatusURL, {headers: toknedHeader, responseType:"text", observe: 'response'}).subscribe(
        sucessRes =>
        {
          this.userStatus.next(JSON.parse(sucessRes.body!));
        }
      )
  }

  getUserStatus()
  {
    return this.userStatus
  }

  // isLogedIn(stauts?:HttpResponse<string>)
  // {
  //   let userStat = JSON.parse(stauts?.body!).isLogedIn
  //   return userStat? true : false
  // }

  // adminStatus:boolean | undefined = undefined;
  // isAdmin()
  // {
  //   this.getUserStatus().subscribe(
  //     sucessRes =>
  //     {
  //       this.adminStatus = JSON.parse(sucessRes.body!).isAdmin
  //       console.log(this.adminStatus)
  //     }
  //   )
  // }


}

