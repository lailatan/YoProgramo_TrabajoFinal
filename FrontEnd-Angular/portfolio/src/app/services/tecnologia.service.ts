import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import { Tecnologia } from '../objetos/tecnologia';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  private apiUrl = 'http://localhost:5001/tecnologias'

  constructor(private http: HttpClient) { }

  getTecnologias(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.apiUrl)
  }

  updateTecnologia(tecnologia: Tecnologia): Observable<Tecnologia>{
    const url = `${this.apiUrl}/${tecnologia.id}`;
    return this.http.put<Tecnologia>(url,tecnologia,httpOptions);
  }

  deleteTecnologia(tecnologia: Tecnologia): Observable<Tecnologia>{
    const url = `${this.apiUrl}/${tecnologia.id}`;
    return this.http.delete<Tecnologia>(url);
  }
  
  addTecnologia(tecnologia: Tecnologia): Observable<Tecnologia>{
    return this.http.post<Tecnologia>(this.apiUrl,tecnologia,httpOptions);
  }

}
