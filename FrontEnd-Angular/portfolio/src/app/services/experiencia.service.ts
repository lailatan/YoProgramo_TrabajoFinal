import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import { Experiencia } from '../objetos/experiencia';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiUrl = 'http://localhost:5001/experiencias'

  constructor(private http: HttpClient) { }

  getExperiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl)
  }

  updateExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    const url = `${this.apiUrl}/${experiencia.id}`;
    return this.http.put<Experiencia>(url,experiencia,httpOptions);
  }

  deleteExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    const url = `${this.apiUrl}/${experiencia.id}`;
    return this.http.delete<Experiencia>(url);
  }
  
  addExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(this.apiUrl,experiencia,httpOptions);
  }

}
