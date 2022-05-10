import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {catchError, Observable,of, throwError} from 'rxjs';
import { Persona } from '../objetos/persona';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  private apiUrl = 'http://localhost:8080/APIportfolio/persona'

  constructor(private http: HttpClient) {
   }

  getPersona(): Observable<Persona> {
      return this.http
          .get<Persona>(this.apiUrl + "/find")
          .pipe(catchError(error=>{
            return throwError(() => new Error(error.status));        
          }));      
  }

  updatePersona(persona: Persona): Observable<Persona>{
    const url = `${this.apiUrl}`;
    return this.http
          .put<Persona>(url+"/save",persona,httpOptions)
          .pipe(catchError(error=>{
            return throwError(() => new Error(error.status));        
          }));
  }

/*
  private handleError(error: HttpErrorResponse) {
    let errorMsg: string;
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      errorMsg = `Error: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error.message);
        errorMsg = "Backend returned code ${error.status}, body was: `, ${error.error.message}";
      }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errorMsg));
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }
    }
  }  
*/
}
