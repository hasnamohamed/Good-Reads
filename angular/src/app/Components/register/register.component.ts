import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { RegistrationInfo } from '../../db-models/userInfo';
import swal from 'sweetalert2';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit, OnChanges {
  userInfo:RegistrationInfo = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    passwordConform:"",
    secretQuestion:"",
    secretAnswer:""
  }

  constructor(
    private userService:UsersService,
    private routerService:Router
    ) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

registerNewUser()
  {
    this.userService.register(this.userInfo)
    .subscribe
    (
      (data) =>
      {
        if(data.status == 200)
        {
          //@ts-ignore
          swal({
            title: "Account has been created successfully!",
            text : "You will be automatically directed to the login page in  5 sec",
            icon : "success"
          });

          setTimeout(() => {

            // @ts-ignore
            swal.close()

          }, 4000)

          setTimeout(() => {
            this.routerService.navigate(["/login"]);
          }, 5000)
        }
      },
      err =>
      {
        console.log(err)
      }
    )

  }
}
