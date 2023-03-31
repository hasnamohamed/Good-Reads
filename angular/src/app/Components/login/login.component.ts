import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginInfo } from 'src/app/db-models/userInfo';
import { UsersService } from 'src/app/services/users.service';
import swal from 'sweetalert';

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
    this.userService.updateTokenInfo(JSON.parse(userData.body!))
    this.userService.tokenIntoLocal(JSON.parse(userData.body!).token)
    if(userData.status == 201 || 200){
      this.userService.updateUserStatus(true)
        swal({
          title: "You have loged successfully!",
          icon : "success"
        });

        setTimeout(() => {

          swal.close()

        }, 4000)

        setTimeout(() => {
          this.routerService.navigate(["/"]);
        }, 5000)
      }
    },
    err => {

      if(err.status == 400)
      {
        swal({
          title: "All filed are required!",
          icon : "error"
        });

      }

      if(err.status == 404)
      {
        swal({
          title: "No account assoicated with that email!",
          icon : "error"
        });

      }

      if(err.status == 401)
      {
        swal({
          title: "The password is incorrect!",
          icon : "error"
        });

      }

      if(err.status == 403)
      {
        swal({
          title: "Access Denied, the action had been reported",
          icon : "error"
        });

      }
      setTimeout(() => {swal.close()}, 2000)
      console.log(err)
    })
  }
}
