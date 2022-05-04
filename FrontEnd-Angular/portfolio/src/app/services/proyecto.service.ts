import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import{Proyecto} from '../objetos/proyecto';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrl = 'http://localhost:8080/APIportfolio/proyecto'


  constructor(private http: HttpClient) { }

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.apiUrl + "/find")
  }

  updateProyecto(proyecto: Proyecto): Observable<Proyecto>{
    //const url = `${this.apiUrl}/${proyecto.id}`;
    return this.http.put<Proyecto>(this.apiUrl + "/save",proyecto,httpOptions);
  }

  deleteProyecto(proyecto: Proyecto): Observable<Proyecto>{
    const url = `${this.apiUrl}/delete/${proyecto.id}`;
    return this.http.delete<Proyecto>(url);
  }
  
  addProyecto(proyecto: Proyecto): Observable<Proyecto>{
    return this.http.post<Proyecto>(this.apiUrl + "/new",proyecto,httpOptions);
  }


}
