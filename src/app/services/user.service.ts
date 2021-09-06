import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  logeado : any = false;
  userInfo : any = "";
  
  constructor(private fireauth : AngularFireAuth,private firestore : AngularFirestore,private router : Router) { 

    fireauth.authState.subscribe((user) => (this.logeado = user));
  }

  Login(email : string,password : string)
  {
    this.userInfo = email;
    this.logeado = true;
    return this.fireauth.signInWithEmailAndPassword(email,password);
  }

  Registro(user : any)
  {
    this.logeado = true;
    return this.fireauth.createUserWithEmailAndPassword(user.email,user.password);
  }

  Logout()
  {
    return this.fireauth.signOut();
  }

  RegistrarLog(user : any)
  {
    return this.firestore.collection("log").add(user);
  }

}
