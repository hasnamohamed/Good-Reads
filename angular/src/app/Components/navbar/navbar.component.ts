import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/Services/users.service';
import swal from 'sweetalert';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogedIn:string = "false";
  isAdmin:boolean = false;
  userImage:string = "http://localhost:9000/images/user-defualt-profile.jpeg"

  constructor(
    private userService:UsersService,
    private routerService:Router,
    )
    {
    }

  ngOnInit() {
    this.userService.updateUserStatus();
    this.userService.currentUserStatus.subscribe(userStatus => this.isLogedIn = userStatus);
    let userInfo = JSON.parse(localStorage.getItem("userInfo")!)
    this.userImage = `http://localhost:9000/${userInfo.userImage}`
  }


  logoutUser()
  {
    this.userService.logout().subscribe(userData => {
      if(userData.status == 201 || 200){
        localStorage.removeItem("userInfo")
        localStorage.setItem('isLogedIn', "false")
        this.userService.updateUserStatus()
          swal({
            title: "You have loged out successfully!",
            icon : "success"
          });

          setTimeout(() => {

            swal.close()
          }, 4000)

          this.routerService.navigate(["/"]);
        }
    },
    err => {
      console.log(err)
    })
  }

}
