import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  /*  First part of course */
  // add "default" to components to remove then(), so Angular know which component to load
  // { path: 'demo1',loadComponent: () => import('../pages/demo1/demo1.component')},
  // { path: 'demo2', loadComponent: () => import('../pages/demo2/demo2.component') },
  // { path: 'demo3', 
  //   loadComponent: () => import('../pages/demo3/demo3.component'), 
  //   canActivate: [authGuard] 
  // },
  // { path: '', redirectTo: 'demo1', pathMatch: 'full' }

  /* Second part of course */
  { path: 'home', loadComponent: () => import('../components/home/home.component')},
  { path: 'cart', loadComponent: () => import('../components/cart/cart.component')},
  { path: 'settings', loadComponent: () => import('../components/settings/settings.component')},
  { path: '', redirectTo: 'home', pathMatch: 'full'}

];
