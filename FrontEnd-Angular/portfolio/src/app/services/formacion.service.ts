import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {catchError, Observable,of, throwError} from 'rxjs';
import { Formacion } from '../objetos/formacion';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  private apiUrl = 'http://localhost:8080/APIportfolio/formacion'

  constructor(private http: HttpClient) { }

  getFormaciones(): Observable<Formacion[]> {
    return this.http
      .get<Formacion[]>(this.apiUrl+"/find")
      .pipe(catchError(error=>{
        return throwError(() => new Error(error.status));        
      }));

  }

  updateFormacion(formacion: Formacion): Observable<Formacion>{
    //const url = `${this.apiUrl}/${formacion.id}`;
    return this.http
      .put<Formacion>(this.apiUrl+"/save",formacion,httpOptions)
      .pipe(catchError(error=>{
        return throwError(() => new Error(error.status));        
      }));

  }

  deleteFormacion(formacion: Formacion): Observable<Formacion>{
    const url = `${this.apiUrl}/delete/${formacion.id}`;
    return this.http
      .delete<Formacion>(url)
      .pipe(catchError(error=>{
        return throwError(() => new Error(error.status));        
      }));

  }
  
  addFormacion(formacion: Formacion): Observable<Formacion>{
    return this.http
      .post<Formacion>(this.apiUrl+"/new",formacion,httpOptions)
      .pipe(catchError(error=>{
        return throwError(() => new Error(error.status));        
      }));

  }
}

