import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { loginInfo, RegistrationInfo, restInfo, tokenInfo } from '../Models/userInfo';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private regUrl:string = "http://localhost:9000/register"
  private logUrl:string = "http://localhost:9000/login"
  private logoutUrl:string = "http://localhost:9000/logout"
  private resetUrl:string = "http://localhost:9000/reset"

  tokenInfo:tokenInfo = {
    email:"",
    token:"",
    expiresIn:"",
    userImage:""
  };

  private isLogedStatus = new BehaviorSubject(false);
  currentUserStatus = this.isLogedStatus.asObservable();


  private usertokenInfo = new BehaviorSubject(this.tokenInfo)
  currentTokenInfo= this.usertokenInfo.asObservable();

  constructor(private http: HttpClient) { }

  register(userInfo:FormData)
  {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    return this.http.post(this.regUrl, userInfo,
    {responseType:"text", observe: 'response'})

  }

  login(userInfo:loginInfo)
  {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    return this.http.post(this.logUrl, userInfo,
    {headers: headers, responseType:"text", observe: 'response'})

  }

  tokenIntoLocal(userToken:string)
  {
    localStorage.setItem('token', userToken)
  }

  logout()
  {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    this.tokenInfo.token = localStorage.getItem('token')!;
    return this.http.post(this.logoutUrl, this.tokenInfo,
    {headers: headers, responseType:"text", observe: 'response'})
  }

  resetPass(claimAccount:restInfo)
  {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    return this.http.post(this.resetUrl, claimAccount,
    {headers: headers, responseType:"text", observe: 'response'})
  }

  updateUserStatus(userStatus:boolean)
  {
    this.isLogedStatus.next(userStatus)
  }

  updateTokenInfo(tokenInfo:tokenInfo)
  {
    this.usertokenInfo.next(tokenInfo)
  }

}

