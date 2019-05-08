import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable()
export class LFDJHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = Object.assign(req, new HttpRequest(<any>req.method, environment.apiDomain + environment.apiPath + req.url));
    req.headers.set('Content-Type', 'application/json');
    return next.handle(req);
  }
}
