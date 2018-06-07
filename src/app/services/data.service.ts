import { Injectable } from '@angular/core';
import { GraphQLClient } from 'graphql-request';

@Injectable()
export class DataService {

  endPoint = 'https://itrack-server.herokuapp.com/graphql';

  data;
  isLoggedin;

  token;
  id;
  userName;
  userEmail;
  userBios;
  userImg;
  userCover;

   client;

  constructor() {
    this.getUserData ();
    this.client = new GraphQLClient(this.endPoint, {
        headers: {
          Authorization: this.token
        }
      });
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
