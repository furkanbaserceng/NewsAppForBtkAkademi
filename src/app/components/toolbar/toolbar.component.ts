import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { RadioService } from 'src/app/services/radio.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private authService:AuthService,
              private toastrService:ToastrService,
              private router:Router,
              private radioService: RadioService) { }

  ngOnInit(): void {
    this.play();
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

  play(): void {
    this.radioService.play('http://37.247.98.8/stream/166/');
  }

  pause(): void {
    this.radioService.pause();
  }

  stop(): void {
    this.radioService.stop();
  }

}
