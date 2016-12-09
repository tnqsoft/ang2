import { Component, Input, OnInit } from '@angular/core';
import { Ng2LoadingService, Ng2LoadingEvent, Ng2LoadingEventType } from './ng2-loading.service';
import { isPresent } from './ng2-loading.util';

@Component({
  selector: 'app-ng2-loading',
  templateUrl: './ng2-loading.component.html',
  styleUrls: ['./ng2-loading.component.css']
})
export class Ng2LoadingComponent implements OnInit {

  @Input() progress: string = '0';
  @Input() color: string = '#DD0031';
  @Input() height: string = '2px';
  @Input() show: boolean = false;
  @Input() spinner: string = '';

  constructor(
    public service: Ng2LoadingService
  ) { }

  ngOnInit() {
    this.service.events.subscribe((event: Ng2LoadingEvent) => {
      if (event.type === Ng2LoadingEventType.PROGRESS && isPresent(event.value)) {
        this.progress = event.value;
      } else if (event.type === Ng2LoadingEventType.COLOR) {
        this.color = event.value;
      } else if (event.type === Ng2LoadingEventType.HEIGHT) {
        this.height = event.value;
      } else if (event.type === Ng2LoadingEventType.VISIBLE) {
        this.show = event.value;
      }
    });
  }

}
