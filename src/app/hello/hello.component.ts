import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { User } from '../services/models/user';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  private demo: User[];

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.demo = this.route.snapshot.data['demo'];
    console.log(this.configService.getValue('name'));
  }

}
