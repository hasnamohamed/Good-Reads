import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { restInfo } from 'src/Models/userInfo';
import { UsersService } from 'src/Services/users.service';
import swal from "sweetalert";
@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.css']
})
export class RestPasswordComponent {

  claimAccount:restInfo =
  {
    email:"",
    password:"",
    passwordConform:"",
    secretQuestion:"",
    secretAnswer:""
  }
  isAccountFound!:boolean;

  constructor(
    private userService:UsersService,
    private routerService:Router
    ) { }

  ngOnInit() {
  }


  resetUserPass()
  {
    this.userService.resetPass(this.claimAccount).subscribe(userData => {
    if(userData.status == 201 || 200){
      //@ts-ignore
        swal({
          title: "You password has updated successfully!",
          text:"You will be dircted to the login page after 5 sec",
          icon : "success"
        });

        setTimeout(() => {

          // @ts-ignore
          swal.close()

        }, 4500)

        setTimeout(() => {
          this.routerService.navigate(["/login"]);
        }, 5000)
      }
    },
    err => {
      if(err.status == 404)
      {
        this.isAccountFound = false
      }
    })
  }

}
