import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,
              private router:Router,
              private toastrService:ToastrService) { }

  isLogged:boolean=false;
  user = { username: '', password: '' };

  ngOnInit(): void {
  }

  onFormSubmit(){

      if(this.authService.login(this.user)){
        this.isLogged=this.authService.isLoggedIn();
        this.router.navigate(["/home"]);
        this.toastrService.success(`Welcome ${this.user.username}!`);
      }else{
        this.toastrService.info("The username and password were entered incorrectly!.","Error!");
      }
    }
    
    

  }


