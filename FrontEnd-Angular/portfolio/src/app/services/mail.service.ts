import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Mail } from '../objetos/mail';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class MailService {
  url="http://localhost:8080/APIportfolio/mail"

  constructor(private http: HttpClient) { }

  enviarMail(mail: Mail): Observable<Mail>{
    return this.http
          .post<Mail>(this.url+'/enviar',mail,httpOptions)
          .pipe(catchError(error=>{ 
          return throwError(() => new Error(error.status));        
    }));
  }
}
