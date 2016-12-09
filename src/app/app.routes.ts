import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloRoutes } from './hello/hello.routes';

// Route Configuration
export const routes: Routes = [
  ...HelloRoutes,
  { path: '**', redirectTo: 'demo' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
