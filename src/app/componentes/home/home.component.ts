import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public user : UserService,public router : Router) { }

  ngOnInit(): void {
  }

  Logout()
  {
    this.user.Logout().then((response : any) => {

      this.user.Logout();
      this.router.navigateByUrl('login');
    })
    .catch((response : any) => {
      
    });

  }

}
