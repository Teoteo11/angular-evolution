import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'demo1', loadComponent: () => import('../pages/demo1/demo1.component').then(c => c.Demo1Component) },
  { path: 'demo2', loadComponent: () => import('../pages/demo2/demo2.component').then(c => c.Demo2Component) },
  { path: 'demo3', loadComponent: () => import('../pages/demo3/demo3.component').then(c => c.Demo3Component) },
  { path: '', redirectTo: 'demo1', pathMatch: 'full'}
];
