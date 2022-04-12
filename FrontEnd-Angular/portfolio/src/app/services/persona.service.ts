import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
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
  private apiUrl = 'http://localhost:5001/persona'

  constructor(private http: HttpClient) {
   }

  getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.apiUrl)
  }

  updatePersona(persona: Persona): Observable<Persona>{
    const url = `${this.apiUrl}`;
    return this.http.put<Persona>(url,persona,httpOptions);
  }

}
