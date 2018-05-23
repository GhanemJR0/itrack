import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { request } from 'graphql-request';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userEmail;
  userPassword;

  data;
  // error = false;
  msg = true;

  @ViewChild('form') f: any;

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public flashMessageService: FlashMessagesService) {
   }

  ngOnInit() {
  }

  onSubmit() {
    if (this.f.valid) {
      const query = `mutation {
          signinUser(authProvider: {
            email: "${this.userEmail}",
            password: "${this.userPassword}"
          })
          {
            token
            user {
              id
              name
              email
              bios
              image
              cover
            }
          }
      }`;
      request('https://itrack-server.herokuapp.com/graphql', query)
      .then((data) => {
        localStorage.setItem('userData', JSON.stringify(data));
        this.flashMessageService.show('You are logged in!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.flashMessageService.show('Invalid Email or Password', {cssClass: 'alert-danger', timeout: 3000});
      });
  }
}


}
