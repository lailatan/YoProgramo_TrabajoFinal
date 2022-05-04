import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="localhost:8080/APIporfolio/auth/login"
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    console.log("Servicio ath corriendo");
    //this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));

   }

  login(credenciales:any): Observable<any>{
      return this.http.post(this.url,credenciales).pipe(map( data => {
        sessionStorage.setItem('currentUser',JSON.stringify(data));  
        this.currentUserSubject.next(data);     
        return data;
      }))
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  isLoggedIn() {
    let token = localStorage.getItem('token'); // get token from local storage
    if (token===null) {
      token="";
    }
      const payload = atob(token.split('.')[1]); // decode payload of token
      const parsedPayload = JSON.parse(payload); // convert payload into an Object  

    return parsedPayload.exp > Date.now() / 1000; // check if token is expired

  }
}
