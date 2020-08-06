import { Component, OnInit } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  appleCount = 10;
  orangeCount = 10;
  grapeCount =10;
  basketStack = [];
  reversedBasketStack = [];
  userInfo = JSON.parse(localStorage.getItem('user'));

  constructor() { }

  ngOnInit() { }

  addToAllstack(fruitType) {
    if(this.userInfo.permissions !== 'all') {
      alert('Not allowed to add or remove');
      return;
    }

    this.basketStack.push({
      type: fruitType
    })
    this.reversedBasketStack = this.basketStack.slice().reverse();


    switch(fruitType) {
      case 'apple' :
        this.appleCount--;
        break;
      case 'orange':
        this.orangeCount--;
        break;
      case 'grape':
        this.grapeCount--;
        break;
    }
  }

  removeFromAllstack(fruitType) {
    let tempArr = [...this.basketStack];
    tempArr.reverse();
    if(tempArr[0].type === fruitType) {
      switch(fruitType) {
        case 'apple' :
          this.appleCount++;
          break;
        case 'orange':
          this.orangeCount++;
          break;
        case 'grape':
          this.grapeCount++;
          break;
      }
      this.basketStack.pop();
      this.reversedBasketStack = this.basketStack.slice().reverse();
    } else {
      alert('you have selected wrong container to pop out')
    }
  }


}
