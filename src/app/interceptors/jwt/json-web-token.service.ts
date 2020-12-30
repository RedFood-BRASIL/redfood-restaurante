import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JsonWebTokenService {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authenticationService.getToken();
    if (token) {
      req = req.clone({
        setHeaders: { Authorization: 'bearer ' + token }
      });
    }
    return next.handle(req);
  }
}