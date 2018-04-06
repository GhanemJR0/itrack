import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  items: any[];
  techs: any[];

  constructor() {
    this.items = ['data science', 'data science', 'data science', 'data science'];
    this.techs = ['data sciences', 'data sciences', 'data sciences', 'data sciences'];
  }

  ngOnInit() {
  }

}
