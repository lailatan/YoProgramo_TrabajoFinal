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
  private apiUrl = 'http://localhost:8080/APIportfolio/tecnologia'

  constructor(private http: HttpClient) { }

  getTecnologias(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.apiUrl+"/find")
  }

  updateTecnologia(tecnologia: Tecnologia): Observable<Tecnologia>{
   // const url = `${this.apiUrl}/${tecnologia.id}`;
    return this.http.put<Tecnologia>(this.apiUrl+"/save",tecnologia,httpOptions);
  }

  deleteTecnologia(tecnologia: Tecnologia): Observable<Tecnologia>{
    const url = `${this.apiUrl}/delete/${tecnologia.id}`;
    return this.http.delete<Tecnologia>(url);
  }
  
  addTecnologia(tecnologia: Tecnologia): Observable<Tecnologia>{
    return this.http.post<Tecnologia>(this.apiUrl+"/new",tecnologia,httpOptions);
  }

}
