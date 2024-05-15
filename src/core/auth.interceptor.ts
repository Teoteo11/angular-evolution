import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const token = localStorage.getItem('token')
  const router = inject(Router)
  let cloneReq = req

  if (token) {
    cloneReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    })
  }
  return next(cloneReq)
    .pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          console.log('error', err.status)
          switch (err.status) {
            case 0:
              // do something
              console.log('redirect to login')
              router.navigateByUrl('demo1')
              break;

            case 401:
            case 404:
            case 500:
              // do something
              console.log('redirect to login')
              break;
          }
        }
        return of(err); /* read more info below ⬇️  */
      })
    )
}

/* 
  INFO
    of vs throwError

    The previous HTTP intereceptor, intercepts all errors.
    This means that the subscribing components will never receive errors.

    If, on the other hand, you want:

    1) the interceptor handles the error
    2) at the same time, the components or services doing the subscribe, can equally handle the error

    use the throwError operator instead of
*/
