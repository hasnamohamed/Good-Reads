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
  isLogedIn:boolean = false;
  isAdmin:boolean = false;
  userImage:string = "http://localhost:9000/user-defualt-profile.jpeg"
  constructor(
    private userService:UsersService,
    private routerService:Router,
    )
    {
    }

  ngOnInit() {
    this.userService.currentUserStatus.subscribe(userStatus => this.isLogedIn = userStatus);
    this.userService.currentTokenInfo.subscribe(
      userTokenInfo =>
      {
        this.userImage = `http://localhost:9000/${userTokenInfo.userImage}`
        console.log(userTokenInfo.email)
      })
  }


  logoutUser()
  {
    this.userService.logout().subscribe(userData => {
      if(userData.status == 201 || 200){
        this.userService.updateUserStatus(false)
        localStorage.removeItem("token")

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
