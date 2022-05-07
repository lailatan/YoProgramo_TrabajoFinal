import { Injectable } from '@angular/core';
import { HttpEvent,HttpHandler, HttpInterceptor,HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!(req.method=="GET" || (req.method=="POST" && req.url=="http://localhost:8080/APIportfolio/usuario/login"))) {
      console.log("INTERCEPTOR METODO NO GET NI LOGIN");
      var currentUser=this.authService.UsuarioAutenticado;
      console.log("INTERCEPTOR METODO: currentUser.token:" + currentUser.token);
      if (currentUser && currentUser.token){
        req=req.clone({
          setHeaders:{
            Authorization: currentUser.token 
          }
        })
      }
      console.log("Interceptor corriendo " + JSON.stringify(currentUser));
    }
    console.log(req);
    return next.handle(req);
  }

}
