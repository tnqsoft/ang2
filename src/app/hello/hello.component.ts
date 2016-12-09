import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { User } from '../services/models/user';
import { ConfigService } from '../services/config.service';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  private demo: User[];
  private loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
    private demoService: DemoService
  ) { }

  ngOnInit() {
    this.demo = this.route.snapshot.data['demo'];
    console.log(this.configService.getValue('name'));
  }

  testSlowRequest(): void {
    this.loading = true;
    this.demoService.getSlowRequest()
      .subscribe(result => {
        this.loading = false;
        console.log(result);
      }, err => {
        let error = err.json();
        this.loading = false;
        console.log(error);
      });
  }

}
