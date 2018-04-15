import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userName;
  data;
  constructor() {
    this.data = JSON.parse(localStorage.getItem('user'));
    this.userName = this.data.createUser.name;
   }

  ngOnInit() {
  }



}
