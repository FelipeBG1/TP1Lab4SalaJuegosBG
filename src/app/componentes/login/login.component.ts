import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = "";
  password : string = "";
  error : string = "";

  constructor(private user : UserService,private router : Router) { }

  ngOnInit(): void {
    
  }

  Login()
  {
    this.user.Login(this.email,this.password).then((response : any) => {

      let log : any = {
        email : this.email,
        fecha : Date.now()
      }

      this.user.RegistrarLog(log).then((response : any) => {
        console.log("Log registrado")
      })
      .catch((response : any) => {
        console.log(response)
      });

      this.router.navigateByUrl('home');
    })
    .catch((response : any) => {
      
      if(this.email == "" && this.password == "")
      {
        this.error = "Debe completar todos los campos";
      }
      else{
        this.error = "Credenciales invalidas";
      }
    });

  }

  LoginInvitado()
  {
    this.email = "invitado@gmail.com"
    this.password = "invitado123";
  }
}
