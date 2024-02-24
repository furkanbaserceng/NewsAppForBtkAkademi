import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isLogged:boolean=false;

  constructor() { }


  login(user:User):boolean{

    if(user.username==="btk" && user.password==="29ocak2000"){
      this.isLogged=true;
      sessionStorage.setItem("loggedIn",user.username);
      return true;
    }
    return false;

  }

  isLoggedIn(){
    return this.isLogged;
  }
  logOut(){
    sessionStorage.removeItem("loggedIn");
    this.isLogged=false;
  }
}
