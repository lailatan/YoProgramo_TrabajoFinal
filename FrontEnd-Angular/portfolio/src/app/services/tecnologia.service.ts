import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {catchError, Observable,of, throwError} from 'rxjs';
import { Tecnologia } from '../objetos/tecnologia';
import * as myGlobales from '../globals';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  private apiUrl = myGlobales.PATH_SERVER + myGlobales.PATH_API_TECNOLOGIA;

  constructor(private http: HttpClient) { }

  getTecnologias(): Observable<Tecnologia[]> {
    return this.http
        .get<Tecnologia[]>(this.apiUrl+"/find")
        .pipe(catchError(error=>{
          return throwError(() => new Error(error.status));        
        }));

  }

  updateTecnologia(tecnologia: Tecnologia): Observable<Tecnologia>{
   // const url = `${this.apiUrl}/${tecnologia.id}`;
    return this.http
        .put<Tecnologia>(this.apiUrl+"/save",tecnologia,httpOptions)
        .pipe(catchError(error=>{
          return throwError(() => new Error(error.status));        
        }));

  }

  deleteTecnologia(tecnologia: Tecnologia): Observable<Tecnologia>{
    const url = `${this.apiUrl}/delete/${tecnologia.id}`;
    return this.http
        .delete<Tecnologia>(url)
        .pipe(catchError(error=>{
          return throwError(() => new Error(error.status));        
        }));

  }
  
  addTecnologia(tecnologia: Tecnologia): Observable<Tecnologia>{
    return this.http
        .post<Tecnologia>(this.apiUrl+"/new",tecnologia,httpOptions)
        .pipe(catchError(error=>{
          return throwError(() => new Error(error.status));        
        }));

  }

}
