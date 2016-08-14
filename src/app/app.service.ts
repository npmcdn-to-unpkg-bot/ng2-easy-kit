/**
 * Created by Martin on 12/08/16.
 */
import { Injectable, Type }    from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from './user';
import { Topic } from './topic';

// export class Data {
//     public content: string;
//
//     constructor(obj:{ content:string}) {
//         this.content = obj.content;
//     }
// }

@Injectable()
export class AppService extends Type {
    private usersUrl = 'http://x2-server.herokuapp.com/api/contexts';
    private params = {
        'top': '',
        'left': ''
    };
    private http: Http;

    public getUserData(user: User, topic: Topic) {
        console.log('user and topic', user + '--' + topic)
        this.params.top = user.name;
        this.params.left = topic.name;
        return this.http.get(this.usersUrl, this.params)
            .toPromise()
            .then(response => response.json().data)
            // .then(function (data) {
            //     console.log('werkt getUserData', data);
            // })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}