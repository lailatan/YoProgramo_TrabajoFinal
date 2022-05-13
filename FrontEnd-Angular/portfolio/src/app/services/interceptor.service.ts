import { Injectable } from '@angular/core';
import { HttpEvent,HttpHandler, HttpInterceptor,HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import * as myGlobales from '../globals';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  private url = myGlobales.PATH_SERVER + myGlobales.PATH_API_USUARIO;

  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!(req.method=="GET" || (req.method=="POST" && req.url==this.url + "/login"))) {
      var currentUser=this.authService.UsuarioAutenticado;
      if (currentUser && currentUser.token){
        req=req.clone({
          setHeaders:{
            Authorization: currentUser.token 
          }
        })
      }
    }
    return next.handle(req);
  }

}
