import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Ng2LoadingComponent } from './ng2-loading.component';
import { Ng2LoadingService, ng2LoadingServiceFactory } from './ng2-loading.service';

export let providers = [{ provide: Ng2LoadingService, useFactory: ng2LoadingServiceFactory }];

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [Ng2LoadingComponent],
  exports: [Ng2LoadingComponent],
  providers: providers
})
export class Ng2LoadingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2LoadingModule,
      providers: providers
    };
  }
}
