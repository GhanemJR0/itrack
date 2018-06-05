import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { request, GraphQLClient } from 'graphql-request';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  imgUrl = 'assets/imgs/';

  token;
  client;

  id;
  userName;
  userEmail;
  userBios;
  userImg;
  userCover;

  nameBool = false;
  emailBool = false;
  biosBool = false;
  imgBool = false;
  coverBool = false;

  userData = {};
  arr: any[];

  @ViewChild('form') f: any;

  constructor(public DS: DataService, public flashMessageService: FlashMessagesService, public router: Router) {
    this.token = this.DS.token;
    this.client = this.DS.client;
    this.id = this.DS.id;
    this.userName = this.DS.userName;
    this.userEmail = this.DS.userEmail;
    this.userBios = this.DS.userBios;
    this.userImg = this.DS.userImg;
    this.userCover = this.DS.userCover;
  }

  ngOnInit() {
  }

  onSubmit () {
    if (this.f.valid) {

      if (this.userName !== this.DS.userName) {
        this.nameBool = true;
        this.userData.name = this.userName;
      }
      if (this.userEmail !== this.DS.userEmail) {
        this.emailBool = true;
        this.userData.email = this.userEmail;
      }
      if (this.userBios !== this.DS.userBios) {
        this.biosBool = true;
        this.userData.bios = this.userBios;
      }
      if (this.userImg !== this.DS.userImg) {
        this.imgBool = true;
        this.userData.image = this.userImg;
      }
      if (this.userCover !== this.DS.userCover) {
        this.coverBool = true;
        this.userData.cover =  this.userCover;
      }

      console.log(this.userData);

      const query = `mutation {
        updateUser(${Object.keys(this.userData).map((key) => `
            ${key}: "${this.userData[key]}"`
          ).join(',')}
        )
      }`;
      
      this.client.request(query)
      .then( res => {
        if (res !== 'FAILED') {
        console.log(res);
        this.DS.userName = this.userName;
        this.DS.userBios = this.userBios;
        this.DS.userImg = this.userImg;
        this.DS.userCover = this.userCover;
        this.flashMessageService.show('Your info updated Succefully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/user/profile']);
        } else {
          console.log(res);
          this.flashMessageService.show('Failed to update your info', {cssClass: 'alert-danger', timeout: 3000});
        }
      })
      .catch( err => {
        this.flashMessageService.show('Failed to update your info', {cssClass: 'alert-danger', timeout: 3000});
        console.log(err.response.errors);
        console.log(err.response.data);
      });

    }
  }

}
