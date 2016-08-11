import { Component } from '@angular/core';
import * as _ from 'lodash';

export class User {
  id: number;
  name: string;
  tokens: Array<number>;
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
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
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
    .users .text {
      position: relative;
      top: -3px;
    }
    .users .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  users = USERS;
  topics = TOPICS;
  selectedUser: User;
  selectedTopic: Topic;
  availableTopics: Array<number>;

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
