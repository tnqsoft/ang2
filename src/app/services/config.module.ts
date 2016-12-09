import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { ConfigService } from './config.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    ConfigService
  ]
})

export class ConfigModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ConfigModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (service: ConfigService) => () => service.init(),
          deps: [ConfigService],
          multi: true
        }
      ]
    };
  }
}
