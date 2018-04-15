import { Component, OnInit, ViewChild } from '@angular/core';

import { request } from 'graphql-request';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userName = '';
  userEmail = '';
  userPassword = '';

  @ViewChild('form') f: any;

  constructor() { }

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
          signinUser(authProvider: {
            email: "${this.userEmail}",
            password: "${this.userPassword}"
          })
          {
            token
            user {
              id
              name
            }
          }
      }`;
      request('http://192.168.43.226:5000/graphql', query).then((data) => {
        localStorage.setItem('user', JSON.stringify(data));
      });
      console.log('form submitted', this.userName, this.userEmail, this.userPassword);
      this.f.reset();
  }
}

}
