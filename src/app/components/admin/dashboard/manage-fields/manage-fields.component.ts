import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-manage-fields',
  templateUrl: './manage-fields.component.html',
  styleUrls: ['./manage-fields.component.scss']
})
export class ManageFieldsComponent implements OnInit {

  client;
  id;
  userName;
  userEmail;
  fields;

  constructor(public DS: DataService) {
    this.client = this.DS.client;
  }

  ngOnInit() {
    const query = `query {
      allFields{
        id
        name
        description
      }
    }`;
    this.client.request(query)
    .then(data => {
     this.fields = data.allFields;
      console.log(this.fields);
    })
    .catch(err => {
      console.log(err.response.errors);
      console.log(err.response.data);
    });
  }


  delete(id) {
    const query1 = `mutation {
      deleteField(
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
