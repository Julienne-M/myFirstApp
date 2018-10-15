import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  visibility = false;

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  constructor() { }

  onClick() {
    if (this.visibility === false) {
      this.visibility = true;
    } else {
      this.visibility = false;
    }
    console.log('Mon âge est secret !');
}
  ngOnInit() {
  }

}
