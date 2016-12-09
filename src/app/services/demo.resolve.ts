import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DemoService } from './demo.service';
import { User } from './models/user';

@Injectable()
export class DemoResolver implements Resolve<any> {
  constructor(private demoService: DemoService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Array<User>> {
    return this.demoService.getList();
  }
}
