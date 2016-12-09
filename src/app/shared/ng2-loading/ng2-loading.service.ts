import {Injectable, EventEmitter} from '@angular/core';

import {isPresent} from './ng2-loading.util';

export enum Ng2LoadingEventType {
  PROGRESS,
  HEIGHT,
  COLOR,
  VISIBLE
}

export class Ng2LoadingEvent {
  constructor(public type: Ng2LoadingEventType, public value: any) { }
}

export function ng2LoadingServiceFactory(): Ng2LoadingService {
  return new Ng2LoadingService(new EventEmitter<Ng2LoadingEvent>());
}

@Injectable()
export class Ng2LoadingService {

  private _progress: number = 0;
  private _height: string = '2px';
  private _color: string = '#DD0031';
  private _visible: boolean = true;

  private _intervalCounterId: any = 0;
  public interval: number = 500; // in milliseconds

  constructor(public events: EventEmitter<Ng2LoadingEvent>) { }

  set progress(value: number) {
    if (isPresent(value)) {
      if (value > 0) {
        this.visible = true;
      }
      this._progress = value;
      this.emitEvent(new Ng2LoadingEvent(Ng2LoadingEventType.PROGRESS, this._progress));
    }
  }

  get progress(): number {
    return this._progress;
  }


  set height(value: string) {
    if (isPresent(value)) {
      this._height = value;
      this.emitEvent(new Ng2LoadingEvent(Ng2LoadingEventType.HEIGHT, this._height));
    }
  }

  get height(): string {
    return this._height;
  }

  set color(value: string) {
    if (isPresent(value)) {
      this._color = value;
      this.emitEvent(new Ng2LoadingEvent(Ng2LoadingEventType.COLOR, this._color));
    }
  }

  get color(): string {
    return this._color;
  }

  set visible(value: boolean) {
    if (isPresent(value)) {
      this._visible = value;
      this.emitEvent(new Ng2LoadingEvent(Ng2LoadingEventType.VISIBLE, this._visible));
    }
  }

  get visible(): boolean {
    return this._visible;
  }

  private emitEvent(event: Ng2LoadingEvent) {
    if (this.events) {
      // Push up a new event
      this.events.next(event);
    }
  }


  start(onCompleted: Function = null) {
    // Stop current timer
    this.stop();
    // Make it visible for sure
    this.visible = true;
    // Run the timer with milliseconds iterval
    this._intervalCounterId = setInterval(() => {
      // Increment the progress and update view component
      this.progress++;
      // If the progress is 100% - call complete
      if (this.progress === 100) {
        this.complete();
      }
    }, this.interval);
  }

  stop() {
    if (this._intervalCounterId) {
      clearInterval(this._intervalCounterId);
      this._intervalCounterId = null;
    }
  }

  reset() {
    this.stop();
    this.progress = 0;
  }

  complete() {
    this.progress = 100;
    this.stop();
    setTimeout(() => {
      // Hide it away
      this.visible = false;
      setTimeout(() => {
        // Drop to 0
        this.progress = 0;
      }, 250);
    }, 250);
  }

}
