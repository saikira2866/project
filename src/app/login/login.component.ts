import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formFlip: boolean = false;
  loginHide: boolean = true;
  regishide: boolean = false;
  regisLeft : boolean = false;

  username: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  forgetMtd(){
    console.log("forget Password clicked");
    this.formFlip = true;
    this.loginHide = false;
  }

  registerMthd() {
    this.regishide = true;
    this.loginHide = false;
    this.regisLeft = true;
  }

  showLogin():void {
    console.log("redirect to dashboard");
    /*if(this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["dashboard"]);
    } else {
      alert("invalid credentials");
    }*/
  }

}
