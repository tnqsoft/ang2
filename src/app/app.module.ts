import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
// import { ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DemoService } from './services/demo.service';
import { DemoResolver } from './services/demo.resolve';
import { ConfigService } from './services/config.service';
import { ConfigModule } from './services/config.module';
import { routing } from './app.routes';

import { Ng2LoadingModule, Ng2LoadingService } from './shared/ng2-loading';
import { HttpService } from './services/custom-http.service';

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
    ConfigModule.forRoot(),
    Ng2LoadingModule.forRoot()
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

    {
      provide: Http,
      useFactory: (backend: XHRBackend, options: RequestOptions, ng2LoadingService: Ng2LoadingService) => {
        return new HttpService(backend as any, options as any, ng2LoadingService as any);
      },
      deps: [XHRBackend, RequestOptions, Ng2LoadingService]
    }
  ],
  exports: [Ng2LoadingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
