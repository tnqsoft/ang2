import { Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { DemoResolver } from '../services/demo.resolve';

// Route Configuration
export const HelloRoutes: Routes = [
  { path: 'demo', component: HelloComponent, resolve: { demo: DemoResolver } },
];
