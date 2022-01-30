import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Observable, throwError as observableThrownError} from "rxjs";



@Injectable()
export class HttpErrorsInterceptors implements HttpInterceptor{
  constructor() {
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // @ts-ignore
    return next.handle(req).pipe(
      catchError((err) => {
        console.log(err);
        return observableThrownError(err);
      })
    )
  }
}

