import { Component, OnInit, ViewChild } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataService } from '../../services/data.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { request } from 'graphql-request';
@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.component.html',
  styleUrls: ['./add-track.component.scss']
})
export class AddTrackComponent implements OnInit {

  children: any[];

  serverUrl;
  token;
  client;

  fields = ['ui / ux designer', 'front-end developer', 'back-end developer', 'full stack developer', 'other'];
  selectedField;
  otherField;
  fieldName;
  fieldDesc;
  fieldId;
  trackName;
  trackDesc;
  technologies: string[];
  trackReason;

  chapterName;
  chapterDesc;

  stepName;
  kinds = ['Article', 'Video', 'Movie'];
  selectedKind;
  stepCost;
  stepLink;
  stepTime;

  fieldsData;
  field;

  x;

  @ViewChild('form') f: any;

  constructor(public DS: DataService, public flashMessageService: FlashMessagesService, public router: Router) {
    this.token = this.DS.token;
    this.client = this.DS.client;
  }

  ngOnInit() {
    const query1 = `query {
      allFields{
        id
        name
      }
    }`;
    this.client.request(query1)
    .then(res => {
      localStorage.setItem('fieldsData', JSON.stringify(res));
    })
    .catch(err => {
      console.log(err.response.errors);
      console.log(err.response.data);
    });
    this.fieldsData = JSON.parse(localStorage.getItem('fieldsData'));
  }

  onSubmit() {
    if (this.f.valid) {

      if (this.selectedField === 'other') {
        this.selectedField = false;
      } else {
        this.otherField = false;
      }

      if (this.selectedField) {
        console.log(this.selectedField + ' ' + this.otherField);
        this.fieldsData.allFields.forEach(field => {
          console.log('this is field name' + field.name);
          this.x = field.name.trim();
          if (this.selectedField === this.x) {
            this.fieldId = field.id.trim();
            console.log(this.fieldId);
          }
        });
        const query = ` mutation {
          createTrack(
            name: "${this.trackName}",
            description: "${this.trackDesc}",
            fieldID: "${this.fieldId}",
            technologies: "${this.technologies}",
            reasons: "${this.trackReason}",
            chapters:
            [{
              name: "${this.chapterName}",
              description: "${this.chapterDesc}",
              steps:
              [{
                name: "${this.stepName}",
                kind: ${this.selectedKind},
                cost: ${this.stepCost},
                link: "${this.stepLink}",
                time: ${this.stepTime}
              }]
            }]
          )
          {
            id
            name
            field {
              id
              name
            }
          }
        } `;
        this.client.request(query)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          /* if (err.response.errors) {
            this.flashMessageService.show(this.selectedField + ' Field Already Exist', {cssClass: 'alert-danger', timeout: 5000});
          } else if (err.response.data) {
            this.flashMessageService.show('Data Error', {cssClass: 'alert-danger', timeout: 5000});
          } */
          console.log(err.response.errors);
          console.log(err.response.data);
        });
      } else if (this.otherField) {
        console.log(this.otherField + ' ' + this.selectedField);
        this.fieldsData.allFields.forEach(field => {
          console.log('this is field name' + field.name);
          this.x = field.name.trim();
          if (this.otherField.trim() === this.x) {
            this.fieldId = field.id.trim();
            console.log(this.fieldId);
          }
        });
        this.fieldId = this.field.id;
        console.log(this.fieldId);
        const query1 = `mutation {
          createTrack(
            name: " ${this.trackName} ",
            description: " ${this.trackDesc} ",
            fieldID: " ${this.fieldId} ",
            technologies: " ${this.technologies} ",
            reasons: " ${this.trackReason} ",
            chapters:
            [{
              name: " ${this.chapterName} ",
              description: " ${this.chapterDesc} ",
              steps:
              [{
                name: " ${this.stepName} ",
                kind: " ${this.selectedKind} ",
                cost: ${this.stepCost},
                link: " ${this.stepLink} ",
                time: ${this.stepTime}
              }]
            }]
          )
          {
            id
            name
            field
          }
        }`;
        this.client.request(query1)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          /* if (err.response.errors) {
            this.flashMessageService.show(this.selectedField + ' Field Already Exist', {cssClass: 'alert-danger', timeout: 5000});
          } else if (err.response.data) {
            this.flashMessageService.show('Data Error', {cssClass: 'alert-danger', timeout: 5000});
          } */
          console.log(err.response.errors);
          console.log(err.response.data);
        });
      } else if (this.otherField) {
        console.log(this.otherField + ' ' + this.selectedField);
        const query2 = `mutation {
          createField (
            name: " ${this.otherField} ",
            description: " ${this.fieldDesc} "
          )
          {
            id
            name
          }
          createTrack(
            name: " ${this.trackName} ",
            description: " ${this.trackDesc} ",
            fieldID: "  ",
            technologies: " ${this.technologies} ",
            reasons: " ${this.trackReason} ",
            chapters:
            [{
              name: " ${this.chapterName} ",
              description: " ${this.chapterDesc} ",
              steps:
              [{
                name: " ${this.stepName} ",
                kind: " ${this.selectedKind} ",
                cost: ${this.stepCost},
                link: " ${this.stepLink} ",
                time: ${this.stepTime}
              }]
            }]
          )
          {
            id
            name
            field
          }
        }`;
        this.client.request(query2)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          /* if (err.response.errors) {
            this.flashMessageService.show(this.selectedField + ' Field Already Exist', {cssClass: 'alert-danger', timeout: 5000});
          } else if (err.response.data) {
            this.flashMessageService.show('Data Error', {cssClass: 'alert-danger', timeout: 5000});
          } */
          console.log(err.response.errors);
          console.log(err.response.data);
        });
      }

    }
  }

  addChapterInputs() {
    this.children.push({ 'chapterName': '' });
  }
/* createTrack(
          name: " ${this.trackName} ",
          description: " ${this.trackDesc} ",
          fieldID: " ${this.fieldId} ",
          technologies: " ${this.technologies} ",
          reasons: " ${this.trackReason} ",
          chapters:
          [{
            name: " ${this.chapterName} ",
            description: " ${this.chapterDesc} ",
            steps:
            [{
              name: " ${this.stepName} ",
              kind: " ${this.selectedKind} ",
              cost: " ${this.stepCost} ",
              link: " ${this.stepLink} ",
              time: " ${this.stepTime} "
            }]
          }]
        )
        {
          id
          name
          field
        } */
}
