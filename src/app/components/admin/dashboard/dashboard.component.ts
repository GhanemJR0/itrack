import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  token;
  userName;
  userEmail;

  constructor(public DS: DataService) {
    this.token = this.DS.token;
    this.userName = this.DS.userName;
    this.userEmail = this.DS.userEmail;
   }

  ngOnInit() {
  }

}
