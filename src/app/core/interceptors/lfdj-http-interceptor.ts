import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class LFDJHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.startsWith('http')) {
      const headers = req.headers.set('Content-Type', 'application/json');
      req = Object.assign(req, new HttpRequest(req.method as any, environment.apiDomain + environment.apiPath + req.url, headers));
    }
    return next.handle(req);
  }
}
