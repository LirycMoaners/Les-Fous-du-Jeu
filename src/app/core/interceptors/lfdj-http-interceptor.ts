import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../services/loader.service';
import { map, first, finalize } from 'rxjs/operators';

@Injectable()
export class LFDJHttpInterceptor implements HttpInterceptor {
  constructor(
    private readonly loaderService: LoaderService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.requestCounter.next(this.loaderService.requestCounter.getValue() + 1);
    if (!req.url.startsWith('http')) {
      const headers = req.headers.set('Content-Type', 'application/json');
      req = Object.assign(req, new HttpRequest(req.method as any, environment.apiDomain + environment.apiPath + req.url, headers));
    }
    return next.handle(req).pipe(finalize(() => {
      this.loaderService.requestCounter.next(this.loaderService.requestCounter.getValue() - 1);
    }));
  }
}
