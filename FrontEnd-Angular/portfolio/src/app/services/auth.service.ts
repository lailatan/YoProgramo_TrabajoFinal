import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../objetos/usuario';
//import { globalVariables } from '../globals';
import * as myGlobales from '../globals';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = myGlobales.PATH_SERVER + myGlobales.PATH_API_USUARIO;

  currentUserSubject: BehaviorSubject<Usuario>;

  constructor(private http: HttpClient) {
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
