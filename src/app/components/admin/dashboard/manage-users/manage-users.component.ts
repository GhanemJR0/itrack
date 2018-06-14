import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  client;
  id;
  userName;
  userEmail;
  users;

  constructor(public DS: DataService) {
    this.client = this.DS.client;
  }

  ngOnInit() {
    const query = `query {
      allUsers {
        id
        email
        name
      }
    }`;
    this.client.request(query)
    .then(data => {
     this.users = data.allUsers;
      console.log(this.users);
    })
    .catch(err => {
      console.log(err.response.errors);
      console.log(err.response.data);
    });
  }


  delete(id) {
    const query1 = `mutation {
      deleteUser(
        id: "${id}"
      )
    }`;
    this.client.request(query1)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

}
