import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {catchError, Observable,of, throwError} from 'rxjs';
import { Experiencia } from '../objetos/experiencia';
import * as myGlobales from '../globals';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiUrl = myGlobales.PATH_SERVER + myGlobales.PATH_API_EXPERIENCIA;

  constructor(private http: HttpClient) { }

  getExperiencias(): Observable<Experiencia[]> {
    return this.http
      .get<Experiencia[]>(this.apiUrl+"/find")          
      .pipe(catchError(error=>{
        return throwError(() => new Error(error.status));        
      }));  
  }

  updateExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    //const url = `${this.apiUrl}/${experiencia.id}`;
    return this.http
      .put<Experiencia>(this.apiUrl+"/save",experiencia,httpOptions)
      .pipe(catchError(error=>{
        return throwError(() => new Error(error.status));        
      }));

  }

  deleteExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    const url = `${this.apiUrl}/delete/${experiencia.id}`;
    return this.http
        .delete<Experiencia>(url)
        .pipe(catchError(error=>{
          return throwError(() => new Error(error.status));        
    }));

  }
  
  addExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    return this.http
      .post<Experiencia>(this.apiUrl+"/new",experiencia,httpOptions)
      .pipe(catchError(error=>{
        return throwError(() => new Error(error.status));        
      }));
  }

}
