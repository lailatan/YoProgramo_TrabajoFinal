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
  private apiUrl = 'http://localhost:8080/APIportfolio/experiencia'

  constructor(private http: HttpClient) { }

  getExperiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl+"/find")
  }

  updateExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    //const url = `${this.apiUrl}/${experiencia.id}`;
    return this.http.put<Experiencia>(this.apiUrl+"/save",experiencia,httpOptions);
  }

  deleteExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    const url = `${this.apiUrl}/delete/${experiencia.id}`;
    return this.http.delete<Experiencia>(url);
  }
  
  addExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(this.apiUrl+"/new",experiencia,httpOptions);
  }

}
