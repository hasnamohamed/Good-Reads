import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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
  @ViewChild('userImage') userImage!:ElementRef;
  previewImage:any = 'http://localhost:9000/images/user-defualt-profile.jpeg'

  userInfo:RegistrationInfo =
  {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    passwordConform:"",
    gender:"no selection",
    secretQuestion:"",
    secretAnswer:""
  }

  readURL(event: any): void
  {
    if (event.target.files && event.target.files[0]) {
        const image = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.previewImage = reader.result;

        reader.readAsDataURL(image);
    }
  }


  constructor(
    private userService:UsersService,
    private routerService:Router
    ) {

    }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  setUserDefualtImage()
  {
    if(this.userInfo.gender == "male")
    this.previewImage = "http://localhost:9000/images/user-defualt-profile.man.jpg"
    else
    {
      this.previewImage = "http://localhost:9000/images/user-defualt-profile.woman.png"
    }
  }

  registerNewUser()
  {

    const registerFormData = new FormData();
    registerFormData.append("firstName", this.userInfo.firstName);
    registerFormData.append("lastName", this.userInfo.lastName);
    registerFormData.append("email", this.userInfo.email);
    registerFormData.append("password", this.userInfo.password);
    registerFormData.append("gender", this.userInfo.gender);
    registerFormData.append("secretQuestion", this.userInfo.secretQuestion);
    registerFormData.append("secretAnswer", this.userInfo.secretAnswer);

    if(this.userImage.nativeElement.files[0])
    {
      let fileSize:number = this.userImage.nativeElement.files[0].size / 1000

      if(fileSize > 2000)
      {
        swal({
          title: "Maximum image size is 2M",
          icon : "error"
        });

        setTimeout(() => { swal.close() }, 2000)
        return;

      }
      else
      {
        registerFormData.append("file", this.userImage.nativeElement.files[0]);
      }
    }



    this.userService.register(registerFormData)
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
