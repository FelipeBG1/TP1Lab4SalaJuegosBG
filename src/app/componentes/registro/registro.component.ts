import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email : string = "";
  password : string = "";
  error : string = "";

  constructor(private user : UserService,private router : Router) { }

  ngOnInit(): void {
  }

  Registro()
  {
    let user : any = {
      email : this.email,
      password : this.password,
    }
    this.user.Registro(user).then((response : any) =>{

      let log : any = {
        email : this.email,
        fecha : Date.now()
      }
      this.user.userInfo = this.email;
      this.user.RegistrarLog(log);
      this.router.navigateByUrl('home');
    })
    .catch((response : any) => {
      
      if(this.email == "" && this.password == "")
      {
        this.error = "Debe completar todos los campos";
      }
      else{
        if(response.code == "auth/email-already-in-use")
        {
          this.error = "Error, el email ya se encuentra registrado";
        }
        else
        {
          if(response.code == "auth/weak-password")
          {
            this.error = "La contraseña es debil,debe contener al menos 6 caracteres";
          }
          else
          {
            if(response.code == "auth/invalid-email")
            {
              this.error = 'Formato de mail invalido';
            }
          }
        }
      }
    });
  }

}
