import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  // add "default" to components to remove then(), so Angular know which component to load
  { path: 'demo1',loadComponent: () => import('../pages/demo1/demo1.component')},
  { path: 'demo2', loadComponent: () => import('../pages/demo2/demo2.component') },
  { path: 'demo3', 
    loadComponent: () => import('../pages/demo3/demo3.component'), 
    canActivate: [authGuard] 
  },
  { path: '', redirectTo: 'demo1', pathMatch: 'full' }
];
