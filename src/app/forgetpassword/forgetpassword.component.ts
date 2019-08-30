import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {


  // loginHide: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToLogin(){
    this.router.navigate(['../login']);


  }


}
