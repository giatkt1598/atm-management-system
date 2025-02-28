import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, finalize, map } from 'rxjs';
import { CustomHttpWaitService } from '../services/custom-http-wait.service';
export class HttpCustomInterceptor implements HttpInterceptor {
  constructor(private readonly awaitService: CustomHttpWaitService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.nextHandle(req, next);
  }

  private addHeader(request: HttpRequest<any>) {
    request = request.clone({
      // withCredentials: true,
    });

    return request;
  }

  private nextHandle(request: HttpRequest<any>, next: HttpHandler) {
    const customRequest = this.addHeader(request);
    this.awaitService.addRequest(customRequest);
    return next.handle(customRequest).pipe(
      finalize(() => {
        this.awaitService.delete(customRequest);
      })
    );
  }
}
