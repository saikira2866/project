import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  regToLogin(){
    this.router.navigate(["../login"]);
  }



}
