import { Component } from '@angular/core';
import { AppService } from './app.service';
import * as _ from 'lodash';
import { User } from './user';
import { Topic } from './topic';

const USERS: User[] = [
  { id: 11, name: 'Eva', tokens: [1, 2, 3] },
  { id: 12, name: 'Bob', tokens: [1] },
  { id: 13, name: 'Gui', tokens: [1, 3, 4] }

];
const TOPICS: Topic[] = [
  { id: 1, name: 'Write mail' },
  { id: 2, name: 'Details' },
  { id: 3, name: 'Profile' },
  { id: 4, name: 'Help' }
];

@Component({
  selector: 'my-app',
  template: `
    <ul class="users">
      <li *ngFor="let user of users"
        [class.selected]="user === selectedUser"
        (click)="onSelect(user)">
        {{user.name}}
      </li>
    </ul>
    <div *ngIf="selectedUser">
      <ul class="topics">
        <li *ngFor="let topic of availableTopics"
        [class.selected]="topic === selectedTopic"
        (click)="onSelectTopic(topic)">
        {{topic.name}}
        </li>
      </ul>
    </div>
    <div *ngIf="selectedTopic">
      <ul class="content">
        <li *ngFor="let content of availableContent">
        {{content}}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .users, 
    .topics {
      display: flex;
      margin: 0;
      list-style-type: none;
      padding: 0;
    }
    .users li, 
    .topics li {
      cursor: pointer;
      background-color: #EEE;
      flex: 1;
      text-align: center;
    }
    .users li.selected:hover,
    .topics li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .users li:hover, 
    .topics li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
  `],
  providers: [ AppService ]
})
export class AppComponent {
  appService = AppService;
  users = USERS;
  topics = TOPICS;
  selectedUser : User;
  selectedTopic : Topic;
  availableTopics: Array<any>;
  availableContent: string;

  onSelect(user: User) {
    var that =  this;
    this.selectedUser = user;
    this.availableTopics = [];
    _.forEach(this.topics, function (topic) {
      _.forEach(user.tokens, function (userToken) {
        if (topic.id === userToken) that.availableTopics.push(topic)
      })
    })

  }
  onSelectTopic(topic: Topic) {
    this.selectedTopic = topic;
    console.log('app data', this.selectedUser.name, topic.name);
    console.log('app Service', this.appService);

    // console.log('app Service', this.appService.getUserData(this.selectedUser, this.selectedTopic));
    // this.appService.getUserData(this.selectedUser, this.selectedTopic).then(function (content) {
    //   console.log(content);
    // });
  }
}
