import { Component, OnInit, ViewChild } from '@angular/core';

import { request } from 'graphql-request';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userName = '';
  userEmail = '';
  userPassword = '';

  signUpData;
  error;
  signupMessage;

  @ViewChild('form') f: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.f.valid) {
      const query = `mutation {
          createUser(name: "${this.userName}", authProvider: {
            email: "${this.userEmail}",
            password: "${this.userPassword}"
          })
          {
            id
            name
          }
      }`;
      request('https://itrack-server.herokuapp.com/graphql', query)
      .then((signUpData) => {
        localStorage.setItem('data', JSON.stringify(signUpData));
      })
      .catch((err) => {
        this.error = true;
      });
      this.signUpData = JSON.parse(localStorage.getItem('data'));
      if (this.signUpData != null && this.error !== true) {
        this.signupMessage = true;
        // this.router.navigate(['/user/login']);
      }
      // console.log('form submitted', this.userName, this.userEmail, this.userPassword);
      // this.f.reset();
      // this.router.navigate(['/user/login']);
  }
}

}
