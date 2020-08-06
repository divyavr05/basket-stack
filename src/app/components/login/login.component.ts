import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authData : Object;
  uName: any;
  password: any;
  errorFlag: boolean;

  constructor(private router: Router ) {
    this.authData = {
      user1: {
        name: 'Admin',
        permissions: 'all',
        password: 'Admin'
      },
      user2: {
        name: 'Myname',
        permissions: 'none',
        password: 'test'
      }
    }
    this.errorFlag = false;
   }

  ngOnInit() {
  }

  login(){
    for (const [key,value] of  Object.entries(this.authData)) {
      if(value.name === this.uName &&  value.password === this.password) {
        this.router.navigate(['home']);
        localStorage.setItem('user' , JSON.stringify(value));
      } else {
        this.errorFlag = true;
      }
    }
  }
}
