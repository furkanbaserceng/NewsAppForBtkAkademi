import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private authService:AuthService,
              private toastrService:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
  }

  @Input() sideNav:any;
  isLogged:boolean=false;

  isLoggedIn(){
    this.isLogged=this.authService.isLoggedIn();
  }

  logOut(){

    this.authService.logOut();
    this.toastrService.success("Exit Successful!");
    this.router.navigate(["/login"]);

    

  }

}
