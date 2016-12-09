import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DemoService } from './services/demo.service';
import { DemoResolver } from './services/demo.resolve';
import { ConfigService } from './services/config.service';
import { ConfigModule } from './services/config.module';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ConfigModule.forRoot()
  ],
  providers: [
    DemoService,
    DemoResolver,

    /*
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (service: ConfigService) => () => service.init(),
      deps: [ConfigService],
      multi: true
    }
    */

    // {
    //   provide: 'DemoResolver',
    //   useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => 'vidu'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
