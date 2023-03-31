import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginInfo } from 'src/app/db-models/userInfo';
import { UsersService } from 'src/app/services/users.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInfo:loginInfo = {
    email:"",
    password:""
  }

  userToken!:string | null;

  constructor(
    private userService:UsersService,
    private routerService:Router
    ) { }

  ngOnInit() {
  }


  loginUser()
  {
    this.userService.login(this.userInfo).subscribe(userData => {
    this.userService.tokenInfo = JSON.parse(userData.body!)
    this.userService.tokenIntoLocal()
    if(userData.status == 201){
      this.userService.updateUserStatus(true)
      //@ts-ignore
        swal({
          title: "You have loged successfully!",
          icon : "success"
        });

        setTimeout(() => {

          // @ts-ignore
          swal.close()

        }, 4000)

        setTimeout(() => {
          this.routerService.navigate(["/"]);
        }, 5000)
      }
    },
    err => {
      console.log(err)
    })
  }
}
