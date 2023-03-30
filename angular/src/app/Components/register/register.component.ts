import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { RegistrationInfo } from '../../db-models/userInfo';
import swal from 'sweetalert';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit, OnChanges {

  newUserImage:any = 'http://localhost:9000/images/user-defualt-profile.jpeg'

  readURL(event: any): void
  {
    if (event.target.files && event.target.files[0]) {
        const image = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.newUserImage = reader.result;

        reader.readAsDataURL(image);
    }
  }


  constructor(
    private userService:UsersService,
    private routerService:Router
    ) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


  userInfo:RegistrationInfo =
  {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    passwordConform:"",
    secretQuestion:"",
    secretAnswer:""
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
          swal({
            title: "Account has been created successfully!",
            text : "You will be automatically directed to the login page in  5 sec",
            icon : "success"
          });

          setTimeout(() => {swal.close()}, 2000)

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
