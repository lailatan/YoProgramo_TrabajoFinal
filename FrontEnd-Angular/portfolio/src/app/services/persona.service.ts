import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {catchError, Observable,of, throwError} from 'rxjs';
import { Persona } from '../objetos/persona';
import * as myGlobales from '../globals';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  private apiUrl = myGlobales.PATH_SERVER + myGlobales.PATH_API_PERSONA;

  constructor(private http: HttpClient) {
   }

  getPersona(): Observable<Persona> {
      return this.http
          .get<Persona>(this.apiUrl + "/find")
          .pipe(catchError(error=>{
            return throwError(() => new Error(error.status));        
          }));      
  }

  updateSobreMiPersona(persona: Persona): Observable<Persona>{
    const url = `${this.apiUrl}`;
    return this.http
          .put<Persona>(url+"/saveSobreMi",persona,httpOptions)
          .pipe(catchError(error=>{
            return throwError(() => new Error(error.status));        
          }));
  }

  updateCabeceraPersona(persona: Persona): Observable<Persona>{
    const url = `${this.apiUrl}`;
    return this.http
          .put<Persona>(url+"/saveCabecera",persona,httpOptions)
          .pipe(catchError(error=>{
            return throwError(() => new Error(error.status));        
          }));
  }

  updateFooterPersona(persona: Persona): Observable<Persona>{
    const url = `${this.apiUrl}`;
    return this.http
          .put<Persona>(url+"/saveFooter",persona,httpOptions)
          .pipe(catchError(error=>{
            return throwError(() => new Error(error.status));        
          }));
  }
}
