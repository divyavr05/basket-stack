import { Component , OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'basket-stack';

  constructor(public router: Router) {

  }

  ngOnInit() {

  }

  navToLogin() {
    this.router.navigate(['login']);
  }

  logout() {
    this.router.navigate(['login']);
    localStorage.clear();
  }

}
