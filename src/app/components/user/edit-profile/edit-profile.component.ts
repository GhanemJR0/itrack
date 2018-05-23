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
  id;
  userName;
  userEmail;
  userBios;
  userImg;
  userCover;

  @ViewChild('form') f: any;

  constructor(public DS: DataService, public flashMessageService: FlashMessagesService, public router: Router) {
    this.token = this.DS.token;
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

      const client = new GraphQLClient('https://itrack-server.herokuapp.com/graphql', {
        headers: {
          Authorization: this.token
        }
      });
      const query = ` mutation {
        updateUser(
          id: "${this.id}",
          name: "${this.userName}",
          bios: "${this.userBios}",
          image: " ${this.userImg}",
          cover: "${this.userCover}"
        )
      } `;
      client.request(query)
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
        console.log(err.response.errors);
        console.log(err.response.data);
      });
    }
  }

}
