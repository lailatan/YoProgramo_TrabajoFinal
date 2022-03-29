import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any>{
    return this.http.get('./assets/data/data.json');
  }

  obtenerDatosGenerales(): Observable<any>{
    return this.http.get('./assets/data/data-general.json');
  }

  obtenerDatosExperiencia(): Observable<any>{
    return this.http.get('./assets/data/data-experiencia.json');
  }

  obtenerDatosProyectos(): Observable<any>{
    return this.http.get('./assets/data/data-proyectos.json');
  }

  obtenerDatosTecnologias(): Observable<any>{
    return this.http.get('./assets/data/data-tecnologias.json');
  }

  obtenerDatosFormacion(): Observable<any>{
    return this.http.get('./assets/data/data-formacion.json');
  }
}
