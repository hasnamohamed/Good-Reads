import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import swal from 'sweetalert';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogedIn:boolean = false;
  constructor(
    private userService:UsersService,
    private routerService:Router
    ) {
  }

  ngOnInit() {
    this.userService.currentUserStatus.subscribe(userStatus => this.isLogedIn = userStatus);
  }


  logoutUser()
  {
    this.userService.logout().subscribe(userData => {
      if(userData.status == 201 || 200){
        this.userService.updateUserStatus(false)
          swal({
            title: "You have loged out successfully!",
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
      console.log(err)
    })
  }

}
