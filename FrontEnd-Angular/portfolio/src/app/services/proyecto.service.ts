import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {catchError, Observable,of, throwError} from 'rxjs';
import{Proyecto} from '../objetos/proyecto';
import * as myGlobales from '../globals';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
 private apiUrl = myGlobales.PATH_SERVER + myGlobales.PATH_API_PROYECTO;


  constructor(private http: HttpClient) { }

  getProyectos(): Observable<Proyecto[]> {
    return this.http
      .get<Proyecto[]>(this.apiUrl + "/find")
      .pipe(catchError(error=>{
        return throwError(() => new Error(error.status));        
      }));

  }

  updateProyecto(proyecto: Proyecto): Observable<Proyecto>{
    //const url = `${this.apiUrl}/${proyecto.id}`;
    return this.http
        .put<Proyecto>(this.apiUrl + "/save",proyecto,httpOptions)
        .pipe(catchError(error=>{
          return throwError(() => new Error(error.status));        
        }));
  }

  deleteProyecto(proyecto: Proyecto): Observable<Proyecto>{
    const url = `${this.apiUrl}/delete/${proyecto.id}`;
    return this.http
        .delete<Proyecto>(url)
        .pipe(catchError(error=>{
          return throwError(() => new Error(error.status));        
        }));
  }
  
  addProyecto(proyecto: Proyecto): Observable<Proyecto>{
    return this.http
        .post<Proyecto>(this.apiUrl + "/new",proyecto,httpOptions)
        .pipe(catchError(error=>{
          return throwError(() => new Error(error.status));        
        }));
  }

}
