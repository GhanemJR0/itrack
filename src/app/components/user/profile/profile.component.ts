import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { DataService } from '../../../services/data.service';
import { element } from 'protractor';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  imgUrl = 'assets/imgs/';

  id;
  userName;
  userEmail;
  userBios;
  userImg;
  userCover;

  trustedImg;

  constructor(private DS: DataService, private _sanitizer: DomSanitizer) {
    this.id = this.DS.id;
    this.userName = this.DS.userName;
    this.userEmail = this.DS.userEmail;
    this.userBios = this.DS.userBios;
    this.userImg = this.DS.userImg;
    this.userCover = this.DS.userCover;
   }

  ngOnInit() {
    if (this.userImg == null) {
      this.userImg = 'assets/imgs/profile.jpg';
    } else {
      this.trustedImg = this._sanitizer.bypassSecurityTrustUrl(this.userImg);
    }
  }





}
