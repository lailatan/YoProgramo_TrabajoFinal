import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Mail } from '../objetos/mail';
import * as myGlobales from '../globals';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class MailService {
  private url = myGlobales.PATH_SERVER + myGlobales.PATH_API_MAIL;
  
  constructor(private http: HttpClient) { }

  enviarMail(mail: Mail): Observable<Mail>{
    return this.http
          .post<Mail>(this.url+'/enviar',mail,httpOptions)
          .pipe(catchError(error=>{ 
          return throwError(() => new Error(error.status));        
    }));
  }
}
