import { Component } from '@angular/core';
import * as _ from 'lodash';

export class User {
  id: number;
  name: string;
  tokens: Array<any>;
}
export class Topic {
  id: number;
  name: string;
}

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
      <h2>{{selectedUser.name}} Tokens!</h2>
      <ul>
        <li *ngFor="let topic of availableTopics"
        [class.selected]="topic === selectedTopic"
        (click)="onSelectTopic(topic)">
        {{topic.name}}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .users {
      display: flex;
      margin: 0;
      list-style-type: none;
      padding: 0;
    }
    .users li {
      cursor: pointer;
      background-color: #EEE;
      height: 1.6em;
    }
    .users li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .users li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
  `]
})
export class AppComponent {
  users = USERS;
  topics = TOPICS;
  selectedUser: User;
  selectedTopic: Topic;
  availableTopics: Array<any>;

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
    // this.availableTopics = _.difference(topic.tokens, this.topics );
    // console.log('availableTopics', this.availableTopics)
  }
}
