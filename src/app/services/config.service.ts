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

import { Config } from './models/config';

@Injectable()
export class ConfigService {
  public config: Config;

  constructor(private http: Http) { }

  init(): any {
    return this.http.get('http://localhost:3000/api/configs')
      .map((res: Response) => res.json())
      .toPromise()
      .then(data => {
        this.config = new Config(
          data.name,
          data.email,
          data.tel,
          data.web,
          data.jobTitle
        );
      });
  }

  getValue(key: string): any {
    if (typeof this.config === 'undefined' || typeof this.config[key] === 'undefined') {
      return null;
    }
    return this.config[key];
  }
}
