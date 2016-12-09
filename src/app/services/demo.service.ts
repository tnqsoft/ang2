import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
// Statics
import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import { User } from './models/user';

@Injectable()
export class DemoService {
  private users: Observable<Array<User>>;

  constructor(private http: Http) { }

  getList(): Observable<Array<User>> {
    return Observable.create(observer => {
      this.http.get('http://localhost:3000/api/demo')
            .map((response: Response) => response.json())
            .subscribe((data) => {
              this.users = data;
              observer.next(this.users);
              observer.complete();
            });
    });
  }

  getSlowRequest(): Observable<any> {
    // get users from api
    return this.http.get('http://localhost:3000/api/slow')
        .map((response: Response) => response.json());
  }
}
