import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../objetos/usuario';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://localhost:8080/APIportfolio/usuario"
  //******************CAMBIAR path EN INTERCEPTOR TAMBIEN

  currentUserSubject: BehaviorSubject<Usuario>;

  constructor(private http: HttpClient) {
    //console.log("Servicio ath corriendo");
    //console.log(this.currentUserSubject)
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));

   }

   logout(){
     sessionStorage.removeItem('currentUser');
     this.currentUserSubject.next({"mail":"", "password":"","token":""});
   }
   login(usuario: Usuario){
    return this.http.post<Usuario>(this.url+'/login',usuario).pipe(map( data => {
      sessionStorage.setItem('currentUser',JSON.stringify(data));  
      this.currentUserSubject.next(data);     
      return data;
    }))
  }

  get UsuarioAutenticado() {
    var token = sessionStorage.getItem('currentUser');
    //console.log("sessionStorage "+token);
    return this.currentUserSubject.value;
  }

}
