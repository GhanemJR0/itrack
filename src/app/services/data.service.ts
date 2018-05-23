import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  data;
  isLoggedin;

  token;
  id;
  userName;
  userEmail;
  userBios;
  userImg;
  userCover;

  constructor() {
    this.getUserData ();
   }

    getUserData () {
      this.data = JSON.parse(localStorage.getItem('userData'));
      if (this.data) {
        this.token = this.data.signinUser.token;
        this.id = this.data.signinUser.user.id;
        if (this.token != null) {
          this.isLoggedin = true;
          this.userName = this.data.signinUser.user.name;
          this.userEmail = this.data.signinUser.user.email;
          this.userBios = this.data.signinUser.user.bios;
          this.userImg = this.data.signinUser.user.image;
          this.userCover = this.data.signinUser.user.cover;
        } else {
          this.isLoggedin = false;
        }
      }
    }

}
