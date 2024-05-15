import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  /* 
    withComponentInputBinding:
      we can take data ( data: { title: 'Hello Input Params'} ) 
      and params ( /products/:productId ) 
      from route  in component with @Input productId
  */
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient()
  ]
};
