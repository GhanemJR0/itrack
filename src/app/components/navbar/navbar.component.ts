import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';
import { request } from 'graphql-request';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedin;
  userName;
  userEmail;

  constructor(public router: Router,
    public activatedRouter: ActivatedRoute,
    public DS: DataService,
    public flashMessageService: FlashMessagesService) {
    this.userName = this.DS.userName;
    this.userEmail = this.DS.userEmail;
    this.isLoggedin = this.DS.isLoggedin;
   }

  ngOnInit() {

  }

  logout () {
    const query = `mutation {
      signoutUser
    }`;
    request('https://itrack-server.herokuapp.com/graphql', query);
    this.isLoggedin = false;
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
    this.flashMessageService.show('You are logged out!', {cssClass: 'alert-info', timeout: 3000});
    /* localStorage.clear();
    console.log('logged out');
    this.isLoggedin = false;
    this.router.navigate(['/']); */
  }

}
