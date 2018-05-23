import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.component.html',
  styleUrls: ['./add-track.component.scss']
})
export class AddTrackComponent implements OnInit {

  children: any[];

  trackName;
  trackDesc;
  fields = ['ui / ux designer', 'front-end developer', 'back-end developer', 'full stack developer'];
  technologies;
  trackReason;

  chapterName;
  chapterDesc;

  stepName;
  kinds = ['article', 'video', 'movie'];
  stepCost;
  stepLink;
  stepTime;

  constructor() { }

  ngOnInit() {
  }

  addChapterInputs() {
    this.children.push({ 'chapterName': '' });
  }

}
